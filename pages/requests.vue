<template>
  <div id="main-content">
    <div class="input-group p-20 float-right w50p">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button">جست و جو</button>
      </div>
      <input dir="rtl" type="text" class="form-control" placeholder="محتوا" aria-label="Recipient's username" aria-describedby="basic-addon2">

    </div>
    <!--<Request/>-->
    <div class="table-responsive" dir="rtl">
      <table dir="rtl" class="table table-hover table-custom spacing5 text-right">
        <thead>
        <tr>
          <th style="width: 20px;">#</th>
          <th>مسوول</th>
          <th>کاربر فرستنده</th>
          <th>کاربر مسئول</th>
          <th style="width: 50px;">زمان</th>
          <th style="width: 50px;">وضعیت</th>
          <th style="width: 110px;">رضایت</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="case_ in cases" v-bind:key="case_.id">
          <td>
            <span>01</span>
          </td>
          <td>
            <div class="d-flex align-items-center">
              <div class="avtar-pic w35 bg-red" data-toggle="tooltip" data-placement="top" title="Avatar Name"><span>SS</span></div>
              <div class="mr-3">
                <a href="page-invoices-detail.html" title="">{{case_.receiver.email}}</a>
                <p class="mb-0">{{case_.receiver.lastname}}</p>
              </div>
            </div>
          </td>
          <td> {{case_.author.email}} </td>
          <td>{{case_.receiver.email}}</td>
          <td>{{case_.createdAt}}</td>
          <td><span class="badge  ml-0 mr-0" :class="getStatusClass(case_.staus)">{{ getStatus(case_.staus) }}</span></td>
          <td>
            <button type="button" class="btn btn-sm btn-default " title="Like" data-toggle="tooltip" data-placement="top"><i class="icon-like"></i></button>
            <button type="button" class="btn btn-sm btn-default" title="Dislike" data-toggle="tooltip" data-placement="top"><i class="icon-dislike"></i></button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script>

  import Request from "../components/Request";
  export default {
    components: {Request},

    async asyncData ({ $axios ,store}) {
      console.log("salm")
       var author =store.state.authUser.id
       var url = 'http://localhost:8080/api/v1/profile/listSubmittedCase/'+author;
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
