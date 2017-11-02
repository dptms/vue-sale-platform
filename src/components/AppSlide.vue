<template>
  <div class="AppSlide" @mousemove="clearInv" @mouseout="runInv">
    <div class="col-md-12">
      <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
        <!-- Indicators -->
        <ol class="carousel-indicators">
          <li data-slide-to="0" :class="{active:nowIndex==index}"  v-for="(banner,index) in banners" @click="goTo(index)"></li>
        </ol>

        <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox">
          <template v-for="(banner,index) in banners">
            
              <div class="item" :class="{active:nowIndex==index}">
                <a :href="banner.href" target="_blank">
                  <transition name="fade">
                    <img :src="banner.src" :alt="banner.title" v-if="show">
                  </transition>
                </a>
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
    this.runInv();
  },
  name: "AppSlide",
  props: {
    banners: {
      type: Array,
      default: []
    },
    inv: {
      type: Number,
      default: 2000
    }
  },
  data() {
    return {
      nowIndex: 0,
      invId: {},
      show: true
    };
  },
  computed: {
    nextPage() {
      return this.banners.length > this.nowIndex + 1 ? this.nowIndex + 1 : 0;
    },
    prevPage() {
      return this.nowIndex > 0 ? this.nowIndex - 1 : this.banners.length - 1;
    }
  },
  methods: {
    goTo(page) {
      this.show = false;
      setTimeout(() => {
        this.nowIndex = page;
        this.show = true;
      }, 50);
    },
    runInv() {
      this.invId = setInterval(() => {
        this.goTo(this.nextPage);
      }, this.inv);
    },
    clearInv() {
      clearInterval(this.invId);
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0.5;
}
</style>