<template>
    <div>
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
                  <a href="page-invoices-detail.html" title="">غفوری</a>
                  <p class="mb-0">ghafouri@sbu.ac.ir</p>
                </div>
              </div>
            </td>
            <td>{{case_.receiver.firstname}} {{case_.receiver.lastname}} {{case_.receiver.email}}</td>
            <td>{{case_.author.email}}</td>
            <td>{{case_.receiver.createdAt}}</td>
            <td><span class="badge badge-success ml-0 mr-0">{{case_.status}}</span></td>
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
  import axios from 'axios'
    export default {
        name: "Request"
    }
</script>

<style scoped>

</style>
