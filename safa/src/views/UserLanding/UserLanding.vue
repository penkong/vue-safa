<template>
  <div class="user-landing">
    <BigCard />
    <BigCard />
    <BigCard />
  </div>
</template>

<script>
import BigCard from "../../components/BigCard";
export default {
  name: "UserLanding",
  components: {
    BigCard
  }
};
</script>

<style lang="scss" scoped>
@import "UserLanding";
</style>