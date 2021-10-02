
import { ref } from 'vue'
import axios from 'axios'

// 发送 ajax的请求

export default function <T>(url: string) {

  const loading = ref(true)
  const data = ref<T | null>(null)
  const errorMsg = ref('')

  axios.get(url).then(response => {
    loading.value = false
    data.value = response.data
  }).catch(error => {
    loading.value = false
    errorMsg.value = error.message || '位置错误'
  })

  return {
    loading,
    data,
    errorMsg,
  }
}