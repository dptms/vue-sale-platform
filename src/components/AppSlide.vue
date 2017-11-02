<template>
  <div class="AppSlide">
    <div class="col-md-12">
      <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
        <!-- Indicators -->
        <ol class="carousel-indicators">
          <li data-slide-to="0" :class="{active:nowIndex==index}"  v-for="(banner,index) in banners"></li>
        </ol>

        <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox">
          <template v-for="(banner,index) in banners">
            <div class="item" :class="{active:nowIndex==index}">
              <img :src="banner.src" :alt="banner.title">
            </div>
          </template>
          {{banners[nowIndex].title}}
        </div>

        <!-- Controls -->
        <a class="left carousel-control" role="button" @click="goTo(prevPage)">
          <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" role="button" @click="goTo(nextPage)">
          <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.banners);
  },
  name: "AppSlide",
  props: {
    banners: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      nowIndex: 0
    };
  },
  computed: {
    nextPage() {
      return this.banners.length > this.nowIndex + 1 ? this.nowIndex + 1 : 0;
    },
    prevPage() {
      return this.nowIndex < 0 ? this.banners.length : this.nowIndex - 1;
    }
  },
  methods: {
    goTo(page) {
      this.nowIndex = page;
      console.log(this.nowIndex);
      console.log(this.nextPage);
    }
  }
};
</script>