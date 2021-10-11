<template>
  <div class="header">
    <div class="header__logo">
      <div class="header__logo-img">
        <img src="../assets/profil.png" alt="" />
      </div>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/ausbildung">Ausbildung</router-link>
      <router-link to="/erfahrung">Erfahrung</router-link>
      <router-link to="/skills">Skills</router-link>
      <router-link to="/sonstiges">Sonstiges</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  background-color: black;
  display: flex;
  justify-content: space-between;
}
</style>