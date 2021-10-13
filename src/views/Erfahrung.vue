<template>
  <div class="erfahrung">
    <p class="erfahrung__text">... was bisher geschah</p>
    <div class="erfahrung__content">
      <div class="erfahrung__timeline"></div>
      <div class="erfahrung__card">
        <erfahrungCard />
      </div>
    </div>
  </div>
</template>

<script>
import ErfahrungCard from "../components/ErfahrungCard.vue";
export default {
  components: { ErfahrungCard },
};
</script>
<style scoped>
.erfahrung {
  display: flex;
  flex-direction: column;
  align-items: center;
}

p.erfahrung__text {
  color: white;
  width: 50%;
  margin: 25px 0;
  font-size: 1.3rem;
}
.erfahrung__content {
  display: flex;

  max-width: 1000px;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
}
.erfahrung__timeline {
  background: linear-gradient(
    0deg,
    rgba(242, 154, 41, 1) 0%,
    rgba(255, 0, 0, 1) 100%
  );
  height: 100%;
  width: 1rem;
}
.erfahrung__card {
  display: flex;
  flex-direction: column-reverse;
  height: 100%;
  justify-content: space-evenly;
}
</style>
