<template>
  <div>


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
            <li class="active"><a href="index.html"><i class="fa fa-home"></i><span>خانه</span></a></li>
            <li><a href="index2.html"><i class="fa fa-envelope"></i><span>درخواست ها</span></a></li>
            <li><a href="index3.html"><i class="fa fa-diamond"></i><span>ثبت درخواست</span></a></li>
            <li><a href="app-contact.html"><i class="fa fa-user"></i><span>کاربران جدید</span></a></li>
            <li><a href="app-inbox.html"><i class="fa fa-book"></i><span>ویرایش حساب</span></a></li>
            <li><a href="app-chat.html"><i class="fa fa-bar-chart"></i><span>گزارش ها</span></a></li>
            <li><a href="app-calendar.html"><i class="fa fa-magic"></i><span>مدیریت کاربران</span></a></li>
          </ul>
        </nav>
      </div>
    </div>



  <div id="main-content">




    <div class="input-group p-20 float-right w50p">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button">جست و جو</button>
      </div>
      <input dir="rtl" type="text" class="form-control" placeholder="محتوا" aria-label="Recipient's username" aria-describedby="basic-addon2">

    </div>
    <div class="table-responsive" dir="rtl">
      <table dir="rtl" class="table table-hover table-custom spacing5 text-right">
        <thead>
        <tr>
          <th style="width: 20px;">#</th>
          <th>مسوول</th>
          <th>شرح</th>
          <th style="width: 50px;">زمان</th>
          <th style="width: 50px;">وضعیت</th>
          <th style="width: 110px;">رضایت</th>
        </tr>
        </thead>
        <tbody>
        <tr>
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
          <td>شرح کمی از کار ...</td>
          <td>۲۲ آبان</td>
          <td><span class="badge badge-success ml-0 mr-0">Done</span></td>
          <td>
            <button type="button" class="btn btn-sm btn-default " title="Like" data-toggle="tooltip" data-placement="top"><i class="icon-like"></i></button>
            <button type="button" class="btn btn-sm btn-default" title="Dislike" data-toggle="tooltip" data-placement="top"><i class="icon-dislike"></i></button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
  </div>
</template>


<script>
  import SideBar from "../components/SideBar";
  export default {
    components: {SideBar},
    head () {
      return {
        script: [
          { src: "/bundles/libscripts.bundle.js", body: true},
          { src: "/bundles/vendorscripts.bundle.js", body: true },
          { src: "/bundles/mainscripts.bundle.js", body: true }
        ],
        link: [
          { rel: 'stylesheet', href: 'vendor/bootstrap/css/bootstrap.min.css' },
          { rel: 'stylesheet', href: 'vendor/font-awesome/css/font-awesome.min.css' },
          { rel: 'stylesheet', href: 'vendor/animate-css/vivify.min.css' }
        ]
      }
    }
  }
</script>
