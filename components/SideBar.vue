<template>
  <div id="left-sidebar" class="sidebar theme-orange text-right" dir="rtl">
    <div class="navbar-brand">
      <a href="/"><img src="../assets/images/icon.svg" alt="Logo" class="img-fluid logo"><span>دانشگاه شهید بهشتی</span></a>
      <button type="button" class="btn-toggle-offcanvas btn btn-sm float-left"><i class="lnr lnr-menu fa fa-chevron-circle-right"></i></button>
    </div>
    <div class="sidebar-scroll">
      <div class="user-account">
        <div class="user_div">
          <img src="../assets/images/user.png" class="user-photo" alt="User Profile Picture">
        </div>
        <div class="text-center">
          <span>خوش آمدید</span>
          <a class="user-name"><strong>عرفانه محمودزاده</strong></a>
        </div>
      </div>
      <nav id="left-sidebar-nav" class="sidebar-nav">
        <ul id="main-menu" class="metismenu">
          <li class="header">منوی اصلی</li>
          <li><n-link to="/"><i class="fa fa-home"></i><span>خانه</span></n-link></li>
          <li><n-link to="/requests"><i class="fa fa-envelope"></i><span>درخواست ها</span></n-link></li>
          <li><n-link to="/newitem"><i class="fa fa-pencil"></i><span>ثبت درخواست</span></n-link></li>
          <li><n-link to="/confirm-users"><i class="fa fa-user"></i><span>کاربران جدید</span></n-link></li>
          <li><n-link to="/edit-profile"><i class="fa fa-book"></i><span>ویرایش حساب</span></n-link></li>
          <li><n-link to="/reports"><i class="fa fa-bar-chart"></i><span>گزارش ها</span></n-link></li>
          <li><n-link to="/cartable"><i class="fa fa-recycle"></i><span>مشاهده ارجاعات</span></n-link></li>
          <!--<li v-if=" $store.state.authUser.role == 'admin' "><n-link to="/confirm-users"><i class="fa fa-users"></i><span>تایید کاربران</span></n-link></li>-->
          <li ><n-link to="/confirm-users"><i class="fa fa-users"></i><span>تایید کاربران</span></n-link></li>

          <!--<li v-if=" $store.state.authUser.role == 'admin' "><n-link to="/users"><i class="fa fa-magic"></i><span>مدیریت کاربران</span></n-link></li>-->
          <li ><n-link to="/users"><i class="fa fa-magic"></i><span>مدیریت کاربران</span></n-link></li>

        </ul>
      </nav>
    </div>
  </div>

</template>

<script>

  export default {
    name: "SideBar",
  }
</script>
