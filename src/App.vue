<template>
  <Header></Header>
  <router-view />
  <vue-particles
    class="particles-class"
    color="#dedede"
    :particleOpacity="0.7"
    :particlesNumber="180"
    shapeType="circle"
    :particleSize="4"
    linesColor="#dedede"
    :linesWidth="1"
    :lineLinked="true"
    :lineOpacity="0.4"
    :linesDistance="150"
    :moveSpeed="3"
    :hoverEffect="true"
    hoverMode="grab"
    :clickEffect="true"
    clickMode="push"
  >
  </vue-particles>
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
  overflow-y: visible;
  overflow-x: hidden;
  width: 100vw;
  min-height: 100vh;
  /* background-color: #333; */
}

#app > div {
  margin: 0 auto;
}

.particles-class {
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  z-index: -100;
}
</style>
