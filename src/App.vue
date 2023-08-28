<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div class="open-life-style" @click="handleOpenLifeStyle">打开生活号</div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    handleOpenLifeStyle() {
      window.location.href = `alipays://platformapi/startapp?appId=10000007&clientVersion=3.7.0.0718&qrcode=${encodeURIComponent('alipays://platformapi/startapp?appId=2021003126669234&page=pages/service/service')}`
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
