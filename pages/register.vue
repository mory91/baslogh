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
        <Logo />
        <div class="card">
          <div class="body">
            <p class="lead">ثبت نام</p>
            <form class="form-auth-small m-t-20" action="/" @submit.prevent="register">
              <div class="form-group">
                <input v-model="firstname" type="email" class="form-control round" placeholder="Your email">
              </div>
              <div class="form-group">
                <input v-model="lastname" type="password" class="form-control round" placeholder="Password">
              </div>
              <div class="form-group">
                <select class="form-control round" name="cars">
                  <option value="employee">کارمند</option>
                  <option value="student">دانشجو</option>
                  <option value="professor">استاد</option>
                  <option value="manager">مدیر</option>
                </select>
              </div>
              <button type="submit" class="btn btn-primary btn-round btn-block">ثبت نام</button>
              <div class="bottom">
                <span>قبلا عضو شده اید ؟ <n-link to="/login">ورود</n-link></span>
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
        firstname: '',
        lastname: '',
        error: null
      }
    },

    methods: {
      async register() {
        try {
          await this.$store.dispatch('register', {
            firstname: this.firstname,
            lastname: this.lastname
          })
          this.firstname = ''
          this.lastname = ''
          this.error = null
          this.$router.push('/')
        } catch (e) {
          this.error = e.message
        }
      },
    }
  }
</script>

