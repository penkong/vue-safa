<template>
  <div class="about">
    <BigCard />
    <BigCard />
    <BigCard />
    <BigCard />
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