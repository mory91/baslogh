<template>
<div id="main-content" dir="rtl">
  <div class="card col-md-12 " style="position: center;text-align: right; margin-left: 40%; background-color: #393d42;">
    <div class="profile-header d-flex  ">
      <div class="d-flex">
        <div class="mr-3" style="margin-left: 20px">
          <img src="../assets/images/user.png" height="90%" class="rounded" style="margin-top: 5%" alt="">
        </div>
        <div class="details" style="margin-top: 20px">
          <h5 class="mb-0">{{user.firstname + ' ' + user.lastname}}</h5>
          <span class="text-light">{{getRole(user.roles[0])}}</span>
          <p class="mb-0"><span> موارد ثبت شده:<strong>{{writtenCasesCount}}</strong></span></p>
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
            <input type="text" class="form-control" placeholder="نام و نام خانوادگی" aria-label="Username"
                   aria-describedby="basic-addon1" v-bind:value="user.firstname + ' ' + user.lastname" readonly>
          </div>

<!--          <div class="input-group mb-3">-->
<!--            <div class="input-group-prepend">-->
<!--              <span class="input-group-text"><i class="fa fa-hashtag"></i></span>-->
<!--            </div>-->
<!--            <input type="text" class="form-control" placeholder="شماره دانشجویی" aria-label="Username"-->
<!--                   aria-describedby="basic-addon1">-->
<!--          </div>-->
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="fa fa-at"></i></span>
            </div>
            <input type="text" class="form-control" placeholder="ایمیل" aria-label="Username"
                   aria-describedby="basic-addon1" v-bind:value="user.email" readonly>
          </div>


              <div class="row clearfix">
                <label class="input-group">موارد</label>
                <div v-for="one_case in cases" v-bind:key="one_case.id" class="col-lg-12 col-md-12">
                  <div class="form-group">
                    <label class="input-group">{{one_case.title}}</label>
                    <textarea rows="4" type="text" class="form-control" placeholder="" v-model="one_case.text"></textarea>
                  </div>
                </div>
              </div>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect01">نقش</label>
            </div>
            <input type="text" class="form-control" placeholder="ایمیل" aria-label="Username"
                   aria-describedby="basic-addon1" id="inputGroupSelect01" v-bind:value="getRole(user.roles[0])" readonly>
          </div>

        </div>
        </div>
    </div>
  </div>
</div>
</template>
<script>
  export default {
    async asyncData({$axios, route, params}) {
      console.log(await $axios.$get(`http://localhost:8080/api/v1/profile/detail/${route.query.id}`))
      return $axios.$get(`http://localhost:8080/api/v1/profile/detail/${route.query.id}`)
    },
    methods: {
      getRole(role) {
        console.log(role)
        if (role == undefined) {
          return 'نامشخص'
        }
        const roles = {
          'ROLE_CLERK': 'کارمند',
          'ROLE_ADMIN': 'مدیر',
          'ROLE_STUDENT': 'دانشجو'
        }
        return roles[role]
      }
    }
  };
</script>
