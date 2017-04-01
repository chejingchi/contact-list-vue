<template>
    <div class="login">
        <div class="contact">
            <fieldset class="contact-inner">
                <div class="input-area">
                    <p class="contact-input">
                        <i class="icon iconfont icon-yonghuming "></i>
                        <input type="text" v-model.trim="username" placeholder="输入你的用户名"/>
                    </p>
                    <p class="contact-input">
                        <i class="icon iconfont icon-mima"></i>
                        <input type="password" placeholder="" @keyup.enter="login" v-model.trim="password"/>
                    </p>
                </div>
                <div class="manipulate-area">
                    <p class="contact-submit">
                        <input class="register" type="button" value="注册" @click="register">
                        <input type="button" value="登陆" @click="login">
                    </p>
                </div>
            </fieldset>
        </div>
    </div>
</template>
<script>
  import axios from 'axios'
  import {HTTP_ROOT, JSON_HEADER_OBJ} from '@/config'

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
        }, JSON_HEADER_OBJ).then((rsp) => {
          let user = rsp.data.user
          console.log(user)
          if (user && (user.username = this.username)) {
            this.$router.push('/contact-list/' + user.id)
          }
        }).catch(function (response) {
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
        .contact {
            .input-area {
                .contact-input {
                    margin-top: 4%;
                    i {
                        float: left;
                        margin-top: 2%;
                        font-size: 200%;
                    }
                    input {
                        width: 90%;
                    }
                }
            }
            .manipulate-area {
                margin-top: 30px;
                .contact-submit {
                    text-align: center;
                    .register {
                        margin-right: 10px;
                    }
                }
            }
        }

    }
</style>
