<template>
  <div class="login input-group input-group-lg">
      <div class="">
      <i class="icon iconfont icon-yonghuming "></i>
      <input type="text" v-model.trim="username" placeholder="输入你的用户名">
      </div>
      <div>
      <i class="icon iconfont icon-mima"></i>
      <input type="password" placeholder="" @keyup.enter="login" v-model.trim="password" >
      </div>
  </div>
</template>
<script>
import axios from 'axios'
import { HTTP_ROOT } from '@/config'

export default {
  name: 'login',
  data () {
    return {
      msg: '',
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      console.log(this.username)
      console.log(this.password)
      axios.post(HTTP_ROOT + '/contactList/login', {
        username: this.username,
        password: this.password
      })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (response) {
          console.log(response)
        })
    }
  }
}
</script>

<style scoped lang="less" rel="stylesheet/less">
.login {
    text-align: -webkit-center;
    margin-top: 30%;
    div {
        margin-top: 4%;
        span {
            font-size: 250%;
        }
        input {
            width: 30%;
            height: 30px;
            border-color: cornsilk;
        }
    }

}
</style>
