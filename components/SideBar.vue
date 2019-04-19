<template>
  <div id="left-sidebar" class="sidebar theme-orange text-right" dir="rtl">
    <div class="navbar-brand">
      <a href="index.html"><img src="../assets/images/icon.svg" alt="Oculux Logo" class="img-fluid logo"><span>دانشگاه شهید بهشتی</span></a>
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
          <li><a href="/"><i class="fa fa-home"></i><span>خانه</span></a></li>
          <li><a href="/requests"><i class="fa fa-envelope"></i><span>درخواست ها</span></a></li>
          <li><a href="/newitem"><i class="fa fa-diamond"></i><span>ثبت درخواست</span></a></li>
          <li><a href="/confirm-users"><i class="fa fa-user"></i><span>کاربران جدید</span></a></li>
          <li><a href="/edit-profile"><i class="fa fa-book"></i><span>ویرایش حساب</span></a></li>
          <li><a href="/reports"><i class="fa fa-bar-chart"></i><span>گزارش ها</span></a></li>
          <li><a href="/users"><i class="fa fa-magic"></i><span>مدیریت کاربران</span></a></li>
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
