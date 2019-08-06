<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BigCard"
};
</script>


<style scoped lang="scss">
@import "../../sass/abstract/mixins";
@import "BigCard";
</style>