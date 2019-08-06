<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Card"
};
</script>

<style lang="scss" scoped>
@import "../../sass/abstract/mixins";
@import "Card";
</style>