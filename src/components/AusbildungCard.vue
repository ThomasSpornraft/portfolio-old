<template>
  <div class="content" v-for="item in items" :key="item.id">
    <div class="content__img">
      <!--  <img :src="item.image" :alt="item.image_alt" /> -->
    </div>
    <div class="bullet">
      <i v-if="item.Abschluss" class="fas fa-graduation-cap"></i>
      <i v-else class="far fa-check"></i>
    </div>
    <div class="date">
      <p>{{ item.start }}</p>
      <p>{{ item.end }}</p>
    </div>
    <div class="description">
      <p>
        {{ item.Beschreibung }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          start: "17.11.1981",
          end: "31.08.1988",
          Beschreibung: "Geburt",
        },
        {
          id: 2,
          start: "01.09.1988",
          end: "31.08.1992",
          Beschreibung: "Besuch der Grundschule in Pfaffenhofen",
        },
        {
          id: 3,
          start: "01.09.1992",
          end: "31.08.1994",
          Beschreibung: "Besuch der Hauptschule in Pfaffenhofen",
        },
        {
          start: "01.09.1994",
          end: "31.08.1998",
          Beschreibung: "Besuch der Realschule in Pfaffenhofen",
          Abschluss: true,
        },
        {
          start: "01.09.1998",
          end: "01.07.2001",
          Beschreibung: "Ausbildung zum Werkzeugmechaniker bei der BMW AG ",
          Abschluss: true,
        },
        {
          start: "01.09.2002",
          end: "01.05.2006",
          Beschreibung:
            "nebenberufliche Fortbildung zum staatlich geprüften Techniker für Maschinenbau am DAA-Technikum",

          Abschluss: true,
        },
      ],
    };
  },
};
</script>

<style scoped>
.content {
  display: flex;
  align-items: center;
  color: #aaa;
  min-height: 90px;
  margin-bottom: 30px;
  width: 100%;
  position: relative;
  box-shadow: -2px -2px 12px rgba(0, 0, 0, 0.2), 2px 4px 2px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: rgba(12, 12, 12, 0.7);
  border: 1px solid lightseagreen;
}

.bullet {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: -20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid lightseagreen;
  background-color: rgba(12, 12, 12, 0.7);
}

.bullet i {
  font-size: 20px;
}

.date {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Ubuntu", Courier, monospace;
  width: 30%;
  font-size: 1.3em;
}
.description {
  display: flex;
  align-items: center;
  width: 70%;
  font-size: 1.3em;
  text-align: left;
}
.description i {
  margin-left: 10px;
}
</style>