<template>
  <div class="about">
    <div class="card"></div>
  </div>
</template>

<script>
  export default {
    name: "About"
  }
</script>


<style scoped lang="scss">
.about {
  height: 90vh;
  width: 100vw;
  background: rgb(3, 163, 255);
  display: flex;
  justify-content: center;
  align-items: center;
  .card {
    background: white;
    display: inline-block;
    min-width: 280px;
    width: 70%;
    min-height: 500px;
    margin: 2rem auto;
    margin-left: auto;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    box-shadow: 0 7px 8px 3px rgba(0,0,0,.15);
    border-radius: 4px;
  }
}
</style>