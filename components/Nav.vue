<template>
  <nav class="navbar navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-right">
        <ul class="nav navbar-nav">
          <li class="dropdown">
            <a href="javascript:void(0);" class="dropdown-toggle icon-menu" data-toggle="dropdown">
              <i class="icon-bell"></i>
              <span class="notification-dot bg-azura">4</span>
            </a>
            <ul class="dropdown-menu feeds_widget vivify fadeIn" dir="rtl">
              <li class="header blue text-right" dir="rtl">۲ اعلان جدید</li>
              <li>
                <a href="javascript:void(0);">
                  <div class="feeds-left bg-red"><i class="fa fa-check"></i></div>
                  <div class="feeds-body">
                    <h4 class="title text-danger">درحواست جدید<small class="float-right text-muted">9:10 AM</small></h4>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <div class="feeds-left bg-info"><i class="fa fa-user"></i></div>
                  <div class="feeds-body">
                    <h4 class="title text-info">کاربر جدید<small class="float-right text-muted">9:15 AM</small></h4>
                  </div>
                </a>
              </li>
            </ul>
          </li>
          <li><a href="javascript:void(0);" class="megamenu_toggle icon-menu" title="Contact">تماس با ما</a></li>
        </ul>



      </div>
      <div class="navbar-left">
        <div class="navbar-btn float-right">
          <n-link to="/"><img src="../assets/images/icon.svg" alt="Logo" class="img-fluid logo"></n-link>
          <button type="button" class="btn-toggle-offcanvas"><i class="lnr lnr-menu fa fa-bars"></i></button>
        </div>
        <div id="navbar-menu" class="float-left">
          <ul class="nav navbar-nav">
            <li>
              <form id="navbar-search" class="navbar-form search-form">
                <input value="" class="form-control" placeholder="Search here..." type="text">
                <button type="button" class="btn btn-default"><i class="icon-magnifier"></i></button>
              </form>
            </li>
            <li><n-link to="/edit-profile" class="right_toggle icon-menu" title="Right Menu"><i class="fa fa-user"></i></n-link></li>
            <li><a href="" class="icon-menu"><i class="icon-power"></i></a></li>
          </ul>
        </div>
      </div>


    </div>
  </nav>
</template>

<script>
  export default {
    name: "Nav"
  }
</script>
