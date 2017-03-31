<template>
  <div class="login">
    <div class="input-area">
      <div>
        <i class="icon iconfont icon-yonghuming "></i>
        <input type="text" v-model.trim="username" placeholder="输入你的用户名">
      </div>
      <div>
        <i class="icon iconfont icon-mima"></i>
        <input type="password" placeholder="" @keyup.enter="login" v-model.trim="password">
      </div>
    </div>
    <div class="manipulate-area">
      <input type="button" value="注册" @click="register">
      <input type="button" value="登陆" @click="login">
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import {HTTP_ROOT, JSON_HEADER} from '@/config'

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
      register () {
        console.log()
      },
      login () {
        axios.post(HTTP_ROOT + '/contactList/login', {
          username: this.username,
          password: this.password
        }, {headers: JSON_HEADER})
          .then((rsp) => {
            let user = rsp.data.user
            console.log(user)
            if (user && (user.username = this.username)) {
              this.$router.push('/contact-list/' + user.id)
            }
          })
          .catch(function (response) {
            console.log(response)
          })
      }
    }
  }
</script>

<style scoped lang="less">
  .login {
    text-align: -webkit-center;
    margin-top: 30%;
    .input-area {
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
    .manipulate-area {
      margin-top: 30px;
      input {
        width: 10%;
        height: 30px;
        background-color: lightsteelblue;
      }
    }
  }
</style>
