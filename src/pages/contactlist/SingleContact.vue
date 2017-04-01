<template>
    <div class="single-contact" @click="contact.isActive = !contact.isActive">
        <i class="iconfont icon-lianxirenat"></i>
        <span> {{contact.contactName}}</span>
        <transition name="fade">
            <a :href="'tel:' +contact.phoneNum" v-if="contact.isActive"> {{contact.phoneNum}} </a>
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
    }
</style>
<script>
  export default{
    data () {
      return {}
    },
    props: ['contact', 'userId'],
    methods: {}
  }
</script>
