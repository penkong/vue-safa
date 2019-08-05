<template>
  <nav class="header">
      <p>Safa Rayaneh</p>
      <div>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  height: 60px;
  width: 100vw;
  background: #ededed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  p {
    padding: 0.5rem;
    margin: 0 2rem;
    font-size: 2rem;
  }

  div {
    padding: 0.5rem;
    margin: 0 2rem;
    font-size: 1.5rem;
    a {
      margin-right: 1rem;
      text-decoration: none;
    }
  }
}
</style>
