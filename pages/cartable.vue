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
              <tr v-for="case_ in cases" v-bind:key="case_.id">
                <td class="w60">
                  <img src="../assets/images/xs/avatar2.jpg" data-toggle="tooltip" data-placement="top" title="" alt="Avatar" class="w35 rounded" data-original-title="Avatar Name">
                </td>
                <td>
                  <a href="javascript:void(0);" title="">{{case_.author.lastname}}</a>
                  <p class="mb-0">{{case_.author.email}}</p>
                </td>
                <td>
                  <span>{{case_.receiver.email}}</span>
                </td>
                <td>
                  <span>{{case_.content.substr(0, 50)}}</span>
                </td>
                <td>
                  <div class="col-md-6 col-sm-12 text-right hidden-xs">
                    <n-link :to="{path: 'referItem', query: {id: case_.id}}" class="btn btn-sm btn-primary btn-round float-left" title="">ورود</n-link>
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
    async asyncData ({ $axios ,store}) {
      console.log("test1")
      var author =store.state.authUser.id
      var url = 'http://localhost:8080/api/v1/profile/listrefferals/'+author;
      console.log(url)
      console.log(author)
      let data = await $axios.$get(url)
      console.log(data)
      console.log("test")
      return {cases:data}

    },    methods: {
      getStatus(status) {
        console.log("status")
        console.log(status)
        if (status == undefined) {
          return 'نامشخص'
        }
        const statuses = {
          'open': 'ایجاد شده',
          'close': 'تمام شده',
          'pending': 'در حال بررسی'
        }
        return statuses[status]
      },
      getStatusClass(status) {
        if (status == undefined) {
          return 'badge-danger'
        }
        const statuses = {
          'open': 'badge-info',
          'close': 'badge-success',
          'pending': 'badge-warning'
        }
        return statuses[status]
      }
    }

  }
</script>
