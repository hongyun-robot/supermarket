<template>
  <div class="navBar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template> 
<script>
export default {
  name: "NavBar",
};
</script>
<style scoped>
.navBar {
  height: 0.44rem;
  line-height: 0.44rem;
  display: flex;
  text-align: center;
  box-shadow: 0 0.01rem 0.01rem 0.01rem rgba(100, 100, 100, 0.1);
}

.left,
.right {
  width: 0.6rem;
}

.center {
  flex: 1;
}
</style>