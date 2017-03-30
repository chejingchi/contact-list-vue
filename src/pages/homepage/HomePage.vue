<template>
  <div class="homePage">
  <div class="welcome-msg">  {{ msg }} </div>
  <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'homePage',
  data () {
    return {
      msg: 'welcome to my contact-list'
    }
  }
}
</script>

<style scoped lang="less" rel="stylesheet/less">
.homePage {
    .welcome-msg {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        font-size: 300%;
    }
}



h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
