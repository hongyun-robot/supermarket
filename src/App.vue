<template>
  <div id="app">
    <router-view />
    <main-tab-bar />
  </div>
</template>

<script>
import MainTabBar from "components/content/maintabbar/MainTabBar";

export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>

<style>
@import "assets/css/base.css";
#app {
  max-width: 750px;
  min-width: 320px;
  font-size: 0.14rem;
}
</style>
