/* eslint-disable */
<template>
  <div class="home">
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
import Card from "../../components/Card";

export default {
  name: "Home",
  components: {
    Card
  }
};
</script>

<style scoped lang="scss">
@import "Home";
</style>