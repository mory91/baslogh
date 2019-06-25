<template>
<div id="main-content" dir="rtl">
  <div class="card col-md-12 " style="position: center;text-align: right; margin-left: 40%; background-color: #393d42;">
    <div class="profile-header d-flex  ">
      <div class="d-flex">
        <div class="mr-3" style="margin-left: 20px">
          <img src="../assets/images/user.png" height="90%" class="rounded" style="margin-top: 5%" alt="">
        </div>
        <div class="details" style="margin-top: 20px">
          <h5 class="mb-0">{{user.email}}</h5>
          <span class="text-light">{{getRole(user.roles[0])}}</span>
          <p class="mb-0"><span> موارد ثبت شده:<strong>{{num}}</strong></span></p>
          <div style="text-align: left">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <label style="color: cadetblue; margin-top: 20px">
                  <i class="fa fa-cloud-upload"></i>   تعویض عکس
                  <input type="file" class="form-control"  aria-label="Username" aria-describedby="basic-addon1">
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div >
    <div class="col-md-12">
      <div class="card">
        <div class="body">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="fa fa-user"></i></span>
            </div>
            <input type="text" class="form-control" placeholder="نام" v-model="user.firstname" aria-label="firstname"
                   aria-describedby="basic-addon1">
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="fa fa-user"></i></span>
            </div>
            <input type="text" class="form-control" placeholder="نام خانوادگی" v-model="user.lastname" aria-label="lastname"
                   aria-describedby="basic-addon1">
          </div>



          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="fa fa-at"></i></span>
            </div>
            <input type="text" class="form-control" placeholder="ایمیل" v-model="user.email" aria-label="Username"
                   aria-describedby="basic-addon1">
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="fa fa-key"></i></span>
            </div>
            <input type="text" class="form-control" placeholder="پسوورد" v-model="user.password" aria-label="Username"
                   aria-describedby="basic-addon1">
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="fa fa-key"></i></span>
            </div>
            <input type="text" class="form-control" placeholder="تکرار پسوورد" v-model="user.resetPassword" aria-label="Username"
                   aria-describedby="basic-addon1">
          </div>
          <button type="submit" @click="submitEdit" class="btn btn-primary btn-round">ذخیره</button>
        </div>
        </div>
    </div>
  </div>
</div>
</template>
<script>
  export default {
    async asyncData ({ $axios ,store}) {
      console.log(store.state)
      var author =store.state.authUser.id
      var url = 'http://localhost:8080/api/v1/profile/getInfo/'+author;
      var url2 = 'http://localhost:8080/api/v1/profile/numOfSubmittedCase/'+author;
      let user = await $axios.$get(url)
      let num = await $axios.$get(url2)
      user.resetPassword = ''
      return {user, num}
    },
    methods: {
      getRole(role) {
        if (role == undefined) {
          return 'نامشخص'
        }
        const roles = {
          'ROLE_CLERK': 'کارمند',
          'ROLE_ADMIN': 'مدیر',
          'ROLE_STUDENT': 'دانشجو'
        }
        return roles[role]
      },
      async submitEdit(){
          await this.$store.dispatch('editProfile', this.user)
          this.$router.push('/')
      }
      }
    }
</script>
