<template>
  <div id="main-content">
    <div class="block-header">
      <div class="row clearfix">
        <div class="col-md-6 col-sm-12 text-right hidden-xs">
        </div>
        <div class="col-md-6 col-sm-12">
          <h2 class="float-right">لیست کار ها</h2>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row clearfix">
        <div class="col-lg-12">
          <div class="table-responsive">
            <table dir="rtl" class="table table-hover table-custom spacing5 text-right">
              <tbody>
              <tr v-for="case_ in cases.case__" v-bind:key="case_.id">
                <td class="w60">
                  <img src="../assets/images/xs/avatar2.jpg" data-toggle="tooltip" data-placement="top" title="" alt="Avatar" class="w35 rounded" data-original-title="Avatar Name">
                </td>
                <td>
                  <a href="javascript:void(0);" title="">{{case_.receiver.email}}</a>
                  <p class="mb-0">{{case_.receiver.email}}</p>
                </td>
                <td>
                  <span>{{case_.receiver.firstname}}</span>
                </td>
                <td>
                  <span>{{case_.content}}...</span>
                </td>
                <td>
                  <div class="col-md-6 col-sm-12 text-right hidden-xs">
                    <n-link to="/referItem" class="btn btn-sm btn-primary btn-round float-left" title="">ورود</n-link>
                  </div>

                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    async asyncData ({ $axios }) {
      let data = await $axios.$get('http://localhost:8080/api/v1/profile/listReferredCase')
      return {cases:data}
    },
  }
</script>
