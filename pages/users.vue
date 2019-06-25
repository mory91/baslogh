 <template>
<div id="main-content">
  <div class="row clearfix">
    <div v-for="userDetails in usersDetails" v-bind:key="userDetails.user.id" class="col-lg-3 col-md-6">
      <a class="card">
        <div class="body text-center">
          <a href="#profile"><img class="img-thumbnail rounded-circle" src="../assets/images/sm/avatar1.jpg" alt=""></a>
          <h6 class="mt-3">{{`${userDetails.user.firstname} ${userDetails.user.lastname}`}}</h6>
          <div class="text-center text-muted">{{getRole(userDetails.user.roles[0])}}</div>
        </div>
        <div class="card-footer text-center">
          <div class="row clearfix">
            <div class="col-12">
              <i class="fa fa-tag font-22"></i>
              <div><span class="text-muted">{{`تعداد درخواست ها: ${userDetails.writtenCasesCount}`}}</span></div>
            </div>
            <div class="col-6">
              <i class="fa fa-pencil font-22"></i>
              <nuxt-link :to="{path: 'profile', query: {id: userDetails.user.id}}"><div><span class="text-muted">مشاهده</span></div></nuxt-link>
            </div>
            <div class="col-6" @click="deactive(userDetails.user.id)">
              <i class="fa fa-close font-22"></i>
              <div><span class="text-muted">حذف</span></div>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</div>
</template>
<script>
  export default {
    async asyncData({$axios}) {
      let data = await $axios.$get('http://localhost:8080/api/v1/profile/details')
      return {usersDetails: data}
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
      async deactive (user_id) {
        await this.$axios.$post("http://localhost:8080/api/v1/profile/deactive", {user: {id: user_id}})
        this.$axios.$get('http://localhost:8080/api/v1/profile/details').then(data => (this.usersDetails = data))
      }
    }
  }
</script>
