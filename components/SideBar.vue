<template>
  <div>
    <div class="overlay"></div>
    <div id="wrapper">
      <div id="left-sidebar" class="sidebar">
        <div class="navbar-brand">
          <logo/>
        </div>
        <div class="sidebar-scroll">
          <div class="user-account">
            <div class="user_div">
              <img src="../assets/images/user.png" class="user-photo" alt="User Profile Picture">
            </div>
            <div class="dropdown">
              <span>خوش آمدید</span>
              <a href="javascript:void(0);" class="dropdown-toggle user-name" data-toggle="dropdown">
                <strong>عرفانه محمودزاده</strong></a>
              <ul class="dropdown-menu dropdown-menu-right account vivify flipInY">
                <li><n-link to="/profile"><i class="icon-user"></i>پروفایل من</n-link></li>
                <li class="divider"></li>
                <li><n-link to="/login"><i class="icon-power"></i>خروج</n-link></li>
              </ul>
            </div>
          </div>
          <nav id="left-sidebar-nav" class="sidebar-nav">
            <ul id="main-menu" class="metismenu">
              <li class="header">صفحات</li>
              <li class="active"><n-link to="/index"><i class="icon-home"></i><span>&nbsp;خانه</span></n-link></li>
              <li><n-link to="/reports"><i class="icon-speedometer"></i><span>&nbsp;گزارشات</span></n-link></li>
              <li><n-link to="/newCase"><i class="icon-pencil"></i><span>&nbsp;ثبت مورد&nbsp;</span></n-link></li>
              <li><n-link to="/newCase"><i class="fa fa-list-alt"></i><span>&nbsp; موارد پیشین</span></n-link></li>
              <li><n-link to="/newCase"><i class="fa fa-list"></i><span>&nbsp;موارد ثبت شده</span></n-link></li>
              <li><n-link to="/newCase"><i class="fa fa-users"></i><span>&nbsp;مدیریت کاربران</span></n-link></li>

            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import Logo from '~/components/Logo.vue'

  export default {
    components: {
      Logo
    },
    name: "sideBar",
    head() {
      return {
        script: [
          {src: "/bundles/libscripts.bundle.js", body: true},
          {src: "/bundles/vendorscripts.bundle.js", body: true},
          {src: "/bundles/c3.bundle.js", body: true},
          {src: "/bundles/mainscripts.bundle.js", body: true}
        ],
        link: [
          {rel: 'stylesheet', href: 'vendor/bootstrap/css/bootstrap.min.css'},
          {rel: 'stylesheet', href: 'vendor/font-awesome/css/font-awesome.min.css'},
          {rel: 'stylesheet', href: 'vendor/bootstrap-datepicker/css/bootstrap-datepicker3.min.css'},
          {rel: 'stylesheet', href: 'vendor/animate-css/vivify.min.css'}
        ]
      }
    },
  }
</script>

<!--<link rel="stylesheet" href="../assets/vendor/bootstrap-datepicker/css/bootstrap-datepicker3.min.css">-->

<!--<script src="../assets/vendor/bootstrap-colorpicker/js/bootstrap-colorpicker.js"></script>&lt;!&ndash; Bootstrap Colorpicker Js &ndash;&gt;-->
<!--<script src="../assets/vendor/jquery-inputmask/jquery.inputmask.bundle.js"></script>&lt;!&ndash; Input Mask Plugin Js &ndash;&gt;-->
<!--<script src="../assets/vendor/jquery.maskedinput/jquery.maskedinput.min.js"></script>-->
<!--<script src="../assets/vendor/multi-select/js/jquery.multi-select.js"></script>&lt;!&ndash; Multi Select Plugin Js &ndash;&gt;-->
<!--<script src="../assets/vendor/bootstrap-multiselect/bootstrap-multiselect.js"></script>-->
<!--<script src="../assets/vendor/bootstrap-datepicker/js/bootstrap-datepicker.min.js"></script>-->
<!--<script src="../assets/vendor/bootstrap-tagsinput/bootstrap-tagsinput.js"></script>&lt;!&ndash; Bootstrap Tags Input Plugin Js &ndash;&gt;-->
<!--<script src="../assets/vendor/nouislider/nouislider.js"></script>&lt;!&ndash; noUISlider Plugin Js &ndash;&gt;-->
<!--<script src="assets/bundles/mainscripts.bundle.js"></script>-->
<!--<script src="assets/js/pages/forms/advanced-form-elements.js"></script>-->

<style scoped>

</style>
