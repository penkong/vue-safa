/* eslint-disable */
<template>
  <div class="home">
    <BigCard style="margin-top: 5.4rem;" />
    <div class="card-container">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "../../components/Card/Card";
import BigCard from "../../components/BigCard/BigCard";

export default {
  name: "Home",
  components: {
    Card,
    BigCard
  }
};
</script>

<style scoped lang="scss">
@import "../../sass/abstract/mixins";
@import "../../sass/pages/Home";
</style>