<template>
    <div class="single-contact">
        <mt-cell-swipe title="" :right="[{
            content: 'Delete',
            style: { background: 'red', color: '#fff', },
            handler: () => this.deleteContact()
            }]">
            <div class="contact-name" @click="contact.active = !contact.active">
                <i class="iconfont icon-lianxirenat"></i>
                <span> {{contact.contactName}}</span>
            </div>
        </mt-cell-swipe>
        <transition name="fade">
            <div class="brief-info" v-if="contact.active">
                <div>
                    <a :href="'tel:' +contact.phoneNum"> {{contact.phoneNum}} </a>
                </div>
                <div>
                    <span>{{ contact.sex == '0' ? '女' : '男'}}</span>
                </div>
            </div>
        </transition>
    </div>
</template>
<style scoped lang="less">
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }

    .fade-enter, .fade-leave-active {
        opacity: 0
    }

    .single-contact {
        font-size: 180%;
        .icon-lianxirenat {
            font-size: 26px;
        }
        .contact-name {
            width: 20em;
        }
        .brief-info {
            border-top: 1px solid oldlace;
            margin-top: 0.5em;
            font-size: 65%;
            div {
                display: inline-block;
                padding-top: 1em;
                border-right: 1px solid oldlace;
                padding-right: 1em;
            }
        }
    }
</style>
<script>
  import axios from 'axios'
  import {HTTP_ROOT, JSON_HEADER_OBJ} from '@/config'

  export default{
    data () {
      return {}
    },
    props: ['contact', 'userId'],
    methods: {
      deleteContact () {
        let param = {}
        axios.post(HTTP_ROOT + 'deleteLinkMan', param, JSON_HEADER_OBJ).then((resp) => {
          this.$router.push('/contact-list/')
        }).catch((resp) => {
          console.log(resp)
        })
      }
    }
  }
</script>
