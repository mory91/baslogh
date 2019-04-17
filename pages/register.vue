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
          <a href="javascript:void(0);">
            <img src="~assets/images/icon.svg" width="60" height="60" class="d-inline-block align-top" alt="">
            <p>سامانه نظرات دانشگاه شهید بهشتی</p>
          </a>
        </div>
        <div class="card">
          <div class="body">
            <p class="lead">ثبت نام</p>
            <form class="form-auth-small m-t-20">
              <div class="form-group">
                <input type="email" class="form-control round" placeholder="Your email">
              </div>
              <div class="form-group">
                <input type="password" class="form-control round" placeholder="Password">
              </div>
              <button type="submit" class="btn btn-primary btn-round btn-block">Register</button>
            </form>
          </div>
        </div>
      </div>
      <div id="particles-js"></div>
    </div>
  </section>
</template>


<script>
  export default {
    head () {
      return {
        script: [
          { src: "/bundles/libscripts.bundle.js", body: true},
          { src: "/bundles/vendorscripts.bundle.js", body: true },
          { src: "/bundles/mainscripts.bundle.js", body: true }
        ],
        link: [
          { rel: 'stylesheet', href: 'vendor/bootstrap/css/bootstrap.min.css' },
          { rel: 'stylesheet', href: 'vendor/font-awesome/css/font-awesome.min.css' },
          { rel: 'stylesheet', href: 'vendor/animate-css/vivify.min.css' }
        ]
      }
    },
    data() {
      return {
        email: '',
        password: '',
        error: null
      }
    },

    methods: {
      async register() {
        try {
          await this.$axios.post('register', {
            username: this.username,
            email: this.email,
            password: this.password
          })

          await this.$auth.loginWith('local', {
            data: {
              email: this.email,
              password: this.password
            },
          })

          this.$router.push('/')
        } catch (e) {
          this.error = e.response.data.message
        }
      }
    }
  }
</script>

