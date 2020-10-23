<template>
  <div id="home">
    <nav-bar class="home_nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners" />
    <recommend-view :recommends="recommends" />
  </div>
</template> 

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./child/HomeSwiper";
import RecommendView from "./child/RecommendView";

import { getHomeMultidata } from "network/home";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
  },
  created() {
    getHomeMultidata().then((res) => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
};
</script>

<style scoped>
.home_nav {
  font-size: var(--font-size);
  background-color: var(--color-tint);
  color: #fff;
}
</style>