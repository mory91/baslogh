<template>
  <div id="main-content">
    <div class="table-responsive">
      <table class="table table-hover table-custom spacing5">
        <thead>
        <tr>
          <th style="width: 20px;">#</th>
          <th>درخواست ها</th>
          <th style="width: 50px;">نقش</th>
          <th style="width: 110px;">وضعیت تایید</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="user in users" v-bind:key="user.id">
          <td>
            <span>01</span>
          </td>

          <td>
            <div class="d-flex align-items-center">
              <div class="ml-3">
                <a href="#" title="">{{user.firstname}}</a>
                <p class="mb-0">{{user.email}}</p>
              </div>
            </div>
          </td>

          <td><span class="badge ml-0 mr-0" :class="getRoleClass(user.roles[0])">{{getRole(user.roles[0]) }}</span></td>
          <td>
            <button type="button" class="btn btn-sm btn-default" title="تایید" data-toggle="tooltip" data-placement="top"><i class="fa  fa-check"></i></button>
            <button type="button" class="btn btn-sm btn-default " title="حذف" data-toggle="tooltip" data-placement="top"><i class="fa  fa-times"></i></button>

          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>

<script>
  export default {
    async asyncData ({ $axios }) {
      let data = await $axios.$get('http://localhost:8080/api/v1/profile/listunaccepted')
      return {users:data}
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
      getRoleClass(role) {
        if (role == undefined) {
          return 'badge-danger'
        }
        const roles = {
          'ROLE_CLERK': 'badge-info',
          'ROLE_ADMIN': 'badge-success',
          'ROLE_STUDENT': 'badge-warning'
        }
        return roles[role]
      }
    }
  }
</script>
