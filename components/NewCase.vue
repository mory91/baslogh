<template>
  <form class="form-auth-small m-t-20" action="/" @submit.prevent="submitCase">
    <div class="col-md-12">
      <div class="card">
        <div class="body">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="fa fa-user"></i></span>
            </div>
            <input v-model="author.id"  type="text" class="form-control" placeholder="ایمیل فرستنده" aria-label="Username"
                   aria-describedby="basic-addon1" readonly>
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="fa fa-user"></i></span>
            </div>
            <input v-model="receiver" type="text" class="form-control" placeholder="ایمیل گیرنده" aria-label="Username"
                   aria-describedby="basic-addon1">
          </div>


          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect01">موضوع</label>
            </div>
            <select v-model="subject" class="custom-select" id="inputGroupSelect01">
              <option selected>انتخاب کنید...</option>
              <option value="grievance">شکایت</option>
              <option value="criticism">انتقاد</option>
              <option value="proposal">پیشنهاد</option>
              <option value="request">درخواست</option>
            </select>
          </div>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="fa fa-sticky-note"></i></span>
            </div>
            <input v-model="title" type="text" class="form-control" placeholder="عنوان" aria-label="title"
                   aria-describedby="basic-addon1">
          </div>
          <div class="row clearfix">
            <div class="col-lg-12 col-md-12 col-sm-12">
              <div class="card">
                  <textarea  v-model="case_content" placeholder="متن درخواست..." class="form-control content-area">
                  </textarea>
              </div>
            </div>
          </div>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <label style="margin: 10px">
                <i class="fa fa-cloud-upload"></i>   انتخاب فایل
                <input type="file" class="form-control"  aria-label="Username" aria-describedby="basic-addon1">
              </label>
            </div>
            <input type="text" class="form-control" placeholder="آدرس فایل" aria-label="Username"
                   aria-describedby="basic-addon1">
          </div>
          <button type="submit" class="btn btn-primary btn-round btn-block">ثبت</button>

        </div>
      </div>
    </div>
  </form>
</template>

<script>
  import DatePickerWrapper from "./date-picker-wrapper";
  export default {
    name: "NewCase",
    head() {
      return {
        script: [
          {src: "/vendor/bootstrap-datepicker/js/bootstrap-datepicker.min.js", body: true},
          {src: "/bundles/advanced-form-elements.js", body: true},
          {src: "/bundles/editors.js", body: true}
        ],
        link: [
          {rel: 'stylesheet', href: '/vendor/dropify/css/dropify.min.css'},

        ]
      }
    },

    data(){
      return{
       // author : this.$store.state.authUser.email,
        author : {id:this.$store.state.authUser.email },
        receiver:'',
        submitDate:'',
        subject:'',
        title:'',
        case_content:'',
        error:null
      }
    },

    methods:{
      async submitCase(){
        try {
          await this.$store.dispatch('submitCase', {
            author: {id:this.$store.state.authUser.email },
            receiver: this.receiver,
            submitDate: this.submitDate,
            subject: this.subject,
            title: this.title,
            text: this.case_content
          })
          this.receiver= '',
          this.submitDate= '',
          this.subject='',
          this.title='',
          this.text= '',
          this.case_content =''
          this.error = null
          this.$router.push('/')
        }
        catch (e) {

        }
      }
    }
  }
</script>
