<template>
    <div class="add-link-man">
        <div>
            <form action="index.html" class="contact">
                <fieldset class="contact-inner">
                    <p class="contact-input">
                        <input type="text" name="name" placeholder="Your Name…" autofocus>
                    </p>

                    <p class="contact-input">
                        <label for="select" class="select">
                            <select name="subject" id="select">
                                <option value="" selected>Choose Subject…</option>
                                <option value="1">I have a suggestion</option>
                                <option value="1">I found a bug</option>
                                <option value="1">Other</option>
                            </select>
                        </label>
                    </p>

                    <p class="contact-input">
                        <textarea name="message" placeholder="Your Message…"></textarea>
                    </p>

                    <p class="contact-submit">
                        <input type="submit" value="Send Message">
                    </p>
                </fieldset>
            </form>

            <input type="text" v-model.trim="username" placeholder="输入你姓名">
            <input type="text" placeholder="" @keyup.enter="login" v-model.trim="phoneNum">
        </div>
    </div>
</template>
<style scoped lang="less">
    .add-link-man {
        input {

        }
    }

</style>
<script>
  export default{
    name: 'addLinkMan',
    data () {
      return {
        username: '',
        phoneNum: ''
      }
    },
    methods: {}
  }
</script>
