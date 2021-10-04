
import {reactive} from 'vue'
import { StoreState, IStore } from '../types'

const store: IStore = {
  state: reactive<StoreState>({
    msg: 'helloworld',
    duanziList: [],
  }),
  setMessage(value: string) {
    store.state.msg = value;
  },
  setDzList(list: any[]) {
    store.state.duanziList = list
  }
}

export default store