<template>
  <div class="recommend">
    <div
      v-for="(item, index) in recommends"
      class="recommend-item"
      :key="index"
    >
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 0.12rem;

  padding: 0.1rem 0 0.2rem;
  border-bottom: 0.1rem solid #eee;
}

.recommend-item {
  flex: 1;
}

.recommend-item img {
  width: 0.7rem;
  height: 0.7rem;
  margin-bottom: 0.1rem;
}
</style>
