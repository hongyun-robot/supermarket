<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="icon" src="~assets/image/tabbar/home.svg" alt="" />
      <img
        slot="icon-active"
        src="~assets/image/tabbar/home_active.svg"
        alt=""
      />
      <div slot="text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="icon" src="~assets/image/tabbar/category.svg" alt="" />
      <img
        slot="icon-active"
        src="~assets/image/tabbar/category_active.svg"
        alt=""
      />
      <div slot="text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/shopcart">
      <img slot="icon" src="~assets/image/tabbar/shop_cart.svg" alt="" />
      <img
        slot="icon-active"
        src="~assets/image/tabbar/shop_cart_active.svg"
        alt=""
      />
      <div slot="text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img
        slot="icon"
        src="~assets/image/tabbar/profilenocircle2x.svg"
        alt=""
      />
      <img
        slot="icon-active"
        src="~assets/image/tabbar/profilenocircle2x_active.svg"
        alt=""
      />
      <div slot="text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template> 
<script>
import TabBar from "components/common/tabbar/tabbar.vue";
import TabBarItem from "components/common/tabbar/tabbaritem/tabbaritem.vue";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>
<style scoped>
</style>