<template>
  <div class="home">
    <h3>count: {{count}}</h3>
    <h3>double: {{double}}</h3>
    <div>
      <button @click="add">+1</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      count: 3,
    }
  },
  computed: {
    double() {
      return this.count * 2
    }
  },
  methods: {
    add() {
      this.count++
    }
  },
}
</script>
