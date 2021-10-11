<template>
  <div class="ausbildung">
    <p class="ausbildung__text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
      perferendis iure commodi similique illum eum dolores aperiam ipsam
      perspiciatis id!
    </p>
    <div class="ausbildung__content">
      <div class="ausbildung__timeline"></div>
      <div class="ausbildung__card">
        <AusbildungCard />
      </div>
    </div>
  </div>
</template>

<script>
import AusbildungCard from "../components/AusbildungCard.vue";
export default {
  components: { AusbildungCard },
};
</script>
<style scoped>
.ausbildung {
  display: flex;
  flex-direction: column;
  align-items: center;
}

p.ausbildung__text {
  color: white;
  width: 50%;
  margin: 25px 0;
  font-size: 1.3rem;
}
.ausbildung__content {
  display: flex;
  max-width: 1000px;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
}
.ausbildung__timeline {
  background: linear-gradient(
    0deg,
    rgba(242, 154, 41, 1) 0%,
    rgba(255, 0, 0, 1) 100%
  );
  height: 100%;
  width: 1rem;
}
.ausbildung__card {
  display: flex;
  flex-direction: column-reverse;
  height: 100%;
  justify-content: space-evenly;
}
</style>
