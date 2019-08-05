<template>
  <div id="app">
    <Header/>
    <router-view />
    <Footer/>
  </div>
</template>
<script>
import Header from './layout/Header';
import Footer from './layout/Footer';
export default {
  name: "App",
  components: {
    Header,
    Footer
  }
}
</script>
<style lang="scss">
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
html {
  // font-size: 62.5%; //10px
  font-size: 16px;
  font-family: 'Red Hat Text', sans-serif;
  overflow: hidden;
  height: 100%;
}
//
body {
  box-sizing: border-box;
}

#app {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
</style>
