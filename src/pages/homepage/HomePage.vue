<template>
  <div class="homePage">
    <div class="welcome-msg"> {{ msg }}</div>
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

<style scoped lang="less">
  @import "../../assets/css/style.css";

  .homePage {
    .welcome-msg {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 18%;
      font-size: 200%;
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
