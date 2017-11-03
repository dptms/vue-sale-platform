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

                  <li class="list-group-item" v-for="product in products">
                    <h4>{{product.title}}</h4>
                    <ul class="list-group">
                      <li class="list-group-item" v-for="item in product.items">
                        <a :href="item.href">{{item.title}}</a>
                      </li>
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
                  <li class="list-group-item" v-for="item in news">
                    <a :href="item.href">{{item.title}}</a>
                  </li>
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

            <div class="col-md-6" v-for="item in boardList">
              <div class="well">
                <div class="media">
                  <div class="media-left">
                    <a href="#">
                      <img :src="item.href" alt="" class="media-object" width="123">
                    </a>
                  </div>
                  <div class="media-body">
                    <h4>{{item.title}}</h4>
                    <p>{{item.description}}</p>
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
  mounted() {
    this.axios.get("/api").then(response => {
      this.products = response.data.products;
      this.news = response.data.news;
      this.boardList = response.data.boardList;
    });
  },
  name: "pagesIndex",
  data() {
    return {
      products: [],
      news: [],
      boardList: [],
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
