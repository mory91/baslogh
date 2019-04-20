<template>
  <div id="main-content">
    <div class="input-group p-20 float-right w50p">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button">جست و جو</button>
      </div>
      <input dir="rtl" type="text" class="form-control" placeholder="محتوا" aria-label="Recipient's username" aria-describedby="basic-addon2">

    </div>
    <Request/>
  </div>
</template>


<script>

  import Request from "../components/Request";
  export default {
    components: {Request}
  }
</script>
