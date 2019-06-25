<template>
  <div id="main-content" dir="rtl">
    <!--<ReferCase/>-->
    <section style="text-align: right">
      <div class="col-md-12">
        <div class="card">
          <div class="body">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fa fa-user"></i></span>
              </div>
              <input  type="text" class="form-control" :placeholder="refCase.author.email" aria-label="Username"
                      aria-describedby="basic-addon1" readonly>
            </div>
            <div class="form-group">
              <label>عنوان</label>
              <label class="form-control" rows="5" cols="30" required>{{refCase.title}}</label>
            </div>
            <div class="form-group">
              <label>شرح کامل</label>
              <label class="form-control" rows="5" cols="30" required>{{refCase.content}}</label>
            </div>
            <div class="form-group">
              <label>وضعیت</label>
              <label class="form-control" rows="5" cols="30" required>{{refCase.status}}</label>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-12">
        <div class="card">
          <div class="body">
            <div class="form-group" onclick="showHistory()">
              <div class="form-group" >
                <label>ارجاع های قبلی&nbsp;<i id = "show" class="fa fa-caret-square-o-down"></i></label>
                <br>
              </div>
              <div id="history" style="display: none" >
                <div v-for="referal in referrals" v-bind:key="referal.id" class="form-group">
                  <label>{{referal.author.email}}</label>
                  <label class="form-control" rows="5" cols="30" required>{{referal.content}}</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  </div>
</template>
<script>
  import ReferCase from '~/components/ReferCase.vue'
  import SideBar from "../components/SideBar";

  export default {
    components: {
      SideBar,
      ReferCase,
    },
    head () {
      return {
        script: [
          { src: "/bundles/libscripts.bundle.js", body: true},
          { src: "/bundles/vendorscripts.bundle.js", body: true },
          {src: "/bundles/myFunctions.js"},
          { src: "/bundles/mainscripts.bundle.js", body: true }
        ],
        link: [
          { rel: 'stylesheet', href: 'vendor/bootstrap/css/bootstrap.min.css' },
          { rel: 'stylesheet', href: 'vendor/font-awesome/css/font-awesome.min.css' },
          { rel: 'stylesheet', href: 'vendor/animate-css/vivify.min.css' }
        ]
      }
    },
    async asyncData({$axios, route, params, store}) {
      let page = await $axios.$get(`http://localhost:8080/api/v1/case/caseinfo/${route.query.id}`)
      console.log(page)
      return {...page, req: {author: {content: '', id: store.state.authUser.id},reciever: {}, status: '', parent: {id: route.query.id}}}
    },

    methods:{
      async submitRef() {
        await this.$axios.$post("http://localhost:8080/api/v1/case/addreferral", this.req)
      }
    }
  }

</script>
