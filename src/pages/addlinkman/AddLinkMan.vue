<template>
    <div class="add-link-man">
        <div class="contact">
            <fieldset class="contact-inner">
                <div class="input-area">
                    <p class="contact-input">
                        <i class="icon iconfont icon-lianxirenat "></i>
                        <input type="text" v-model.trim="linkManName" placeholder="linkman..."/>
                    </p>
                    <p class="contact-input">
                        <i class="icon iconfont icon-dianhua"></i>
                        <input type="text" placeholder="" placeholder="telephone..." v-model.trim="phoneNum"/>
                    </p>
                </div>
                <mt-radio
                        title="性别"
                        v-model.trim="sex"
                        :options="options">
                </mt-radio>
                <div class="file-input">
                    <input id="id" type="file"/>
                    <label for="id"></label>
                </div>
                <div class="manipulate-area">
                    <p class="contact-submit">
                        <input class="register" type="button" value="添加" @click="addLinkMan">
                    </p>
                </div>
            </fieldset>
        </div>
    </div>
</template>
<style scoped lang="less">
    .add-link-man {
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
            }
        }
        .file-input {
            position: relative;
            input {
                position: absolute;
                left: -9999px;
            }
            label {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 10; /* 这个z-index之后说到*/
            }
        }
    }

</style>
<script>
  import axios from 'axios'
  import {HTTP_ROOT, JSON_HEADER} from '@/config'
  import util from '../../utils'

  export default{
    name: 'addLinkMan',
    data () {
      return {
        linkManName: '',
        phoneNum: '',
        sex: '',
        user: {},
        options: [
          {
            label: '男',
            value: '1'
          },
          {
            label: '女',
            value: '0'
          }
        ]
      }
    },
    methods: {
      addLinkMan () {
        let flag = util.checkIsEmpty({value: this.linkManName, message: '请输入联系人姓名'}, {
          value: this.phoneNum,
          message: '请输入电话号码'
        })
        if (flag) {
          let param = {}
          param.userId = this.user.id
          param.contactName = this.linkManName
          param.phoneNum = this.phoneNum
          param.sex = this.sex
          axios.post(HTTP_ROOT + '/contactList/addLinkMan', param, {headers: JSON_HEADER})
              .then((rsp) => {
                if (rsp.data.flag) {
                  this.$router.push('/contact-list/' + this.user.id)
                }
              })
              .catch(function (response) {
                console.log(response)
              })
        }
      }
    },
    created: function () {
      this.user.id = this.$route.params.id
    }
  }
</script>
