<template>
  <div class="skills">
    <aside><h1>🚧🚧</h1></aside>
    <div class="skills__main">
      <skill-card></skill-card>
    </div>
  </div>
</template>

<script>
import skillCard from "../components/SkillCard.vue";
export default {
  components: { skillCard },
};
</script>

<style scoped>
.skills {
  display: flex;

  flex-direction: column;
  width: 70%;
  margin-top: 120px;
  gap: 30px;
}

.skills p {
  color: white;
}
.skills__main {
  display: flex;
  flex-wrap: wrap;
  flex: auto;
  margin-top: 10px;
  gap: 20px;
  justify-content: center;
}
</style>
