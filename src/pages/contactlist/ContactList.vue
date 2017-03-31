<template>
  <div class="contact-list">
    <div class="header">
      <i class="iconfont icon-icon"></i>
      <span>:{{user.username}}</span>
      <i class="iconfont icon-tianjia" @click="addLinkMan"></i>
    </div>
    <div>
      <div class="list-area" v-for="contact in contactList">
        <SingleContact :contact="contact"></SingleContact>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
  .contact-list {
    .header {
      margin-top: 5%;
      i {
        font-size: 45px;
      }
      .icon-tianjia {
        margin-right: 6%;
        float: right;
      }
      span {
        font-size: 45px;
      }
    }
    div {
      .list-area {
        padding-top: 5%;
        padding-bottom: 5%;
        height: 70px;
        line-height: 68px;
        font-size: 50px;
        margin-left: 10%;
      }
      span {
      }
      a {

      }
    }
  }

</style>
<script>
  import axios from 'axios'
  import {HTTP_ROOT, JSON_HEADER_OBJ} from '@/config'
  import SingleContact from './SingleContact.vue'

  export default{
    name: 'contactList',
    data () {
      return {
        user: {},
        contactList: []
      }
    },
    created () {
      this.user.id = this.$route.params.id
      axios.post(HTTP_ROOT + '/contactList/init', {
        id: this.user.id
      }, JSON_HEADER_OBJ)
        .then((rsp) => {
          this.contactList = rsp.data.contactList
          this.user = rsp.data.user
        })
        .catch(function (response) {
          console.log(response)
        })
    },
    methods: {
      addLinkMan () {
        this.$router.push('/add-linkman/' + this.user.id)
      }
    },
    components: {
      SingleContact
    }
  }
</script>
