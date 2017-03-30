<template>
  <div class="homePage">
  {{ msg }}
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
