<template>
  <div class="pagesIndex">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
            <div class="row">
              <div class="panel panel-success">
                <div class="panel-heading">
                  全部产品
                </div>
                <ul class="list-group">
                  <li class="list-group-item">
                    <h4>Pc产品</h4>
                    <ul class="list-group">
                      <li class="list-group-item">数据统计</li>
                      <li class="list-group-item">数据统计</li>
                      <li class="list-group-item">数据统计</li>
                    </ul>
                  </li>
                  <li class="list-group-item">
                    <h4>Pc产品</h4>
                    <ul class="list-group">
                      <li class="list-group-item">数据统计</li>
                      <li class="list-group-item">数据统计</li>
                      <li class="list-group-item">数据统计</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          
            <div class="row">
              <div class="panel panel-success">
                <div class="panel-heading">
                  最新消息
                </div>
                <ul class="list-group">
                  <li class="list-group-item">新闻条目1新闻条目1新闻条目1新闻条目1新闻条目1</li>
                  <li class="list-group-item">新闻条目1新闻条目1新闻条目1新闻条目1</li>
                  <li class="list-group-item">新闻条目1新闻条目1新闻条目1新闻条目1</li>
                </ul>
              </div>
            </div>
        </div>
        
        <div class="col-md-9">

          <div class="row">
            <AppSlide :banners="banners" :inv.Number="4000"></AppSlide>
          </div>

          <br>

          <div class="row">
            <div class="col-md-6">
              <div class="well">
                <div class="media">
                  <div class="media-left">
                    <a href="#">
                      <img src="../assets/logo.png" alt="" class="media-object" width="123">
                    </a>
                  </div>
                  <div class="media-body">
                    <h4>开放产品</h4>
                    <p>开放产品是一个款新产品开放产品放产品是一个款新产品</p>
                    <button class="btn btn-success">立即购买</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="well">
                <div class="media">
                  <div class="media-left">
                    <a href="#">
                      <img src="../assets/logo.png" alt="" class="media-object" width="123">
                    </a>
                  </div>
                  <div class="media-body">
                    <h4>开放产品</h4>
                    <p>开放产品是一个款新产品开放产品放产品是一个款新产品</p>
                    <button class="btn btn-success">立即购买</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="well">
                <div class="media">
                  <div class="media-left">
                    <a href="#">
                      <img src="../assets/logo.png" alt="" class="media-object" width="123">
                    </a>
                  </div>
                  <div class="media-body">
                    <h4>开放产品</h4>
                    <p>开放产品是一个款新产品开放产品放产品是一个款新产品</p>
                    <button class="btn btn-success">立即购买</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppSlide from "../components/AppSlide";
export default {
  name: "pagesIndex",
  data() {
    return {
      banners: [
        {
          src: require("../assets/slideShow/pic1.jpg"),
          title: "图片一",
          href: "https://www.baidu.com"
        },
        {
          src: require("../assets/slideShow/pic2.jpg"),
          title: "图片二",
          href: "http://music.163.com/"
        },
        {
          src: require("../assets/slideShow/pic3.jpg"),
          title: "图片三",
          href: "https://laravel-china.org/"
        },
        {
          src: require("../assets/slideShow/pic4.jpg"),
          title: "图片四",
          href: "http://www.bootcdn.cn/"
        }
      ]
    };
  },
  components: {
    AppSlide
  }
};
</script>

<style scoped>
li {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
