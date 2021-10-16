<template>
  <Header @themeToggler="toggleTheme"></Header>
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
  methods: {
    toggleTheme(checked) {
      if (!checked) {
        let dark = document.documentElement;
        dark.style.setProperty("--bg-color-primary", "rgba(0, 0, 0, .7)");
        dark.style.setProperty("--bg-color-secondary", "#122");
        dark.style.setProperty("--accent-color-primary", "#20b2aa");
        dark.style.setProperty("--accent-color-secondary", "#ffb6c1");
        console.log("dark", dark);
      } else if (checked) {
        let light = document.documentElement;
        light.style.setProperty(
          "--bg-color-primary",
          "rgba(255, 255, 255, .7)"
        );
        light.style.setProperty("--bg-color-secondary", "#777");
        console.log("light", light);
        light.style.setProperty("--accent-color-primary", "#ffb6c1");
        light.style.setProperty("--accent-color-secondary", "#20b2aa");
      }
    },
  },
};
</script>

<style>
/* imports START */
@import url("https://fonts.googleapis.com/css2?family=Ubuntu&display=swap");

/* imports END */

:root {
  --bg-color-primary: rgba(0, 0, 0, 0.7);
  --bg-color-secondary: #122;
  --accent-color-primary: #20b2aa;
  --accent-color-secondary: #ffb6c1;
}

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

a {
  text-decoration: underline;
  cursor: pointer;
}
</style>
