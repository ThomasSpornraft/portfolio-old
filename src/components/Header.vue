<template>
  <div class="header">
    <div class="header__logo">
      <div class="header__logo-img">
        <img src="../assets/profil.png" alt="" />
      </div>
      <div class="header__logo-name">
        <h2>Thomas</h2>
      </div>
    </div>
    <div class="header__navbar-mobile">
      <i class="fas fa-bars"></i>
    </div>
    <div class="header__navbar-desktop">
      <router-link to="/">Home</router-link>
      <router-link to="/ausbildung">Ausbildung</router-link>
      <router-link to="/erfahrung">Erfahrung</router-link>
      <router-link to="/skills">Skills</router-link>
      <router-link to="/sonstiges">Sonstiges</router-link>
    </div>
    <div class="header__settings">
      <div class="header__settings-design">
        <HeaderToggler @themeToggler="theme"></HeaderToggler>
      </div>
      <div class="header__settings-language">
        <p>Englisch</p>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderToggler from "./HeaderToggler.vue";
export default {
  components: { HeaderToggler },
  methods: {
    theme(checked) {
      this.$emit("themeToggler", checked);
    },
  },
};
</script>

<style scoped>
.header {
  padding: 5px 20px;
  background-color: var(--bg-color-primary);
  display: flex;
  justify-content: space-between;
  align-items: center !important;
  height: 70px;
  color: white;
}

.header.light {
  background-color: rgba(255, 255, 255, 0.7);
  color: black !important;
}

.header.light a {
  color: black;
}

.header__logo {
  display: flex;
  gap: 0.6rem;
  align-items: center;
  cursor: pointer;
}

.header__logo-img img {
  border: 3px solid lightseagreen;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
}

.header__logo-name {
  text-align: left;
}

.header__navbar-mobile {
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
}

.header__navbar-mobile i {
  font-size: 32px;
}

.header__navbar-desktop {
  display: flex;
  align-items: center;
  gap: 0.9rem;
}

.header__navbar-desktop a {
  text-decoration: none;
  font-size: 1.5rem;
  color: white;
  padding: 16px 0;
}

a.router-link-active {
  border-bottom: 2px solid red;
}

.header__navbar-desktop a:hover {
  color: red;
}

.header__settings {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  font-size: 1.4rem;
  line-height: 1.5rem;
}
</style>