<template>
  <div class="about">
    <div v-for="item in 5" :key="item.id" class="free-fix">
      <BigCard>{{ item }}</BigCard>
    </div>
  </div>
</template>

<script>
import BigCard from "../../components/BigCard/BigCard";
export default {
  name: "About",
  components: {
    BigCard
  }
};
</script>


<style scoped lang="scss">
@import "../../sass/abstract/mixins";
@import "About";
</style>