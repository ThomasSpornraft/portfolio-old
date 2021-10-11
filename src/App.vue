<template>
  <Header></Header>
  <router-view />
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: { Header },
};
</script>

<style>
/* imports START */
@import url("https://fonts.googleapis.com/css2?family=Ubuntu&display=swap");

/* imports END */

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: "Ubuntu", sans-serif;
  text-align: center;
  color: whitesmoke;
  width: 100vw;
  min-height: 100vh;
  background-color: #333;
}

#app > div {
  margin: 0 auto;
}
</style>
