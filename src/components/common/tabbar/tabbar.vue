<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style scoped>
#tabbar {
  display: flex;
  height: 0.49rem;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f6f6f6;
  box-shadow: 0 -0.03rem 0.02rem rgba(100, 100, 100, 0.08);
}
</style>