<template>
  <div class="content">
    <div v-for="item in 5" :key="item.id" class="free-fix">
      <BigCard>{{ item }}</BigCard>
    </div>
  </div>
</template>

<script>
import BigCard from "../../components/BigCard/BigCard";
export default {
  name: "UserLanding",
  components: {
    BigCard
  }
};
</script>

<style lang="scss" scoped>
@import "../../sass/abstract/mixins";
@import "../../sass/component/content";
@import "UserLanding";
</style>