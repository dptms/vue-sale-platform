<template>
  <div class="AppHeader">
    <nav class="navbar navbar-inverse">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">
            <img alt="Brand" src="../assets/logo.png" width="40">
          </a>
        </div>
        <ul class="nav navbar-nav navbar-right">
            <li><a href="#">登录</a></li>
            <li><a href="#">注册</a></li>
            <li><a href="#">关于</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style>
.navbar-brand {
  padding: 5px 15px;
}
</style>
