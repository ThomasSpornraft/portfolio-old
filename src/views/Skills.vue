<template>
  <div class="skills">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ad nam
      provident, quos, molestiae deleniti neque facere, tempora voluptatem natus
      sed? Ipsa libero voluptatibus assumenda esse deserunt ullam ut fugiat.
    </p>
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
  margin-top: 20px;
  gap: 30px;
}
.skills p {
  color: white;
}
.skills__main {
  display: flex;
  flex-wrap: wrap;
  flex: auto;
  gap: 20px;
  justify-content: center;
}
</style>
