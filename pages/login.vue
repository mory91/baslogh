<template>
  <section class="theme-orange">
    <div class="pattern">
      <span class="red"></span>
      <span class="indigo"></span>
      <span class="blue"></span>
      <span class="green"></span>
      <span class="orange"></span>
    </div>
    <div class="auth-main particles_js">
      <div class="auth_div vivify popIn">
        <div class="auth_brand">
          <Logo/>
        </div>
        <div class="card">
          <div class="body">
            <p class="lead">ورود به سامانه</p>
            <form class="form-auth-small m-t-20" @submit.prevent="login">
              <div class="form-group">
                <label for="signin-email" class="control-label sr-only">Email</label>
                <input v-model="formUsername" type="email" class="form-control round" id="signin-email" value="user@domain.com" placeholder="Email">
              </div>
              <div class="form-group">
                <label for="signin-password" class="control-label sr-only">Password</label>
                <input v-model="formPassword" type="password" class="form-control round" id="signin-password" value="thisisthepassword" placeholder="Password">
              </div>
              <div class="form-group clearfix">
                <label class="fancy-checkbox element-right">

                  <input type="checkbox">
                  <span>مرا به خاطر بسپار</span>
                </label>
              </div>
              <button type="submit" class="btn btn-primary btn-round btn-block">ورود</button>
              <div class="bottom">
                <span>عضو نیستید ؟ <n-link to="/register">عضویت</n-link></span>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div id="particles-js"></div>
    </div>
  </section>
</template>


<script>
  import Logo from '~/components/Logo.vue'
  export default {
    layout: 'auth',
    components:{
      Logo
    },
    data() {
      return {
        formError: null,
        formUsername: '',
        formPassword: ''
      }
    },
    methods: {
      async login() {
        try {
          await this.$store.dispatch('login', {
            username: this.formUsername,
            password: this.formPassword
          })
          this.formUsername = ''
          this.formPassword = ''
          this.formError = null
          this.$router.push('/')
        } catch (e) {
          this.formError = e.message
        }
      },
      async logout() {
        try {
          await this.$store.dispatch('logout')
        } catch (e) {
          this.formError = e.message
        }
      }
    }
  }
</script>

