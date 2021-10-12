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
        <i v-if="item.Abschluss" class="fas fa-graduation-cap"></i>
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
          image:
            "https://cdn.pixabay.com/photo/2016/04/12/13/18/stork-1324371_960_720.png",
          image_alt: "Stork wirth baby",
        },
        {
          id: 2,
          start: "01.09.1988",
          end: "31.08.1992",
          Beschreibung: "Besuch der Grundschule in Pfaffenhofen",
          image:
            "https://images.unsplash.com/photo-1597742200001-778e51937acc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80",
          image_alt: "pic for Elementary School",
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
          image: "https://www.7-forum.com/news/2006/bmw_azubis_p0012523-b.jpg",
          image2:
            "https://images.unsplash.com/photo-1530191601183-4de2969575ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
          image_source:
            "https://www.7-forum.com/bild.php?bild=news/2006/bmw_azubis_p0012523-b.jpg&title=Auszubildende%20bei%20der%20BMW%20Group&cpy=bmw&rel=1&ort=&ref=http://www.7-forum.com/news/BMW-Berufsausbildung-Open-1189.html&p=",
          Abschluss: true,
        },
        {
          start: "01.09.2002",
          end: "01.05.2006",
          Beschreibung:
            "nebenberufliche Fortbildung zum staatlich geprüften Techniker für Maschinenbau am DAA-Technikum",
          image:
            "https://cdn.pixabay.com/photo/2018/04/16/11/32/technical-drawing-3324368_960_720.jpg",

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
  min-height: 100px;
  margin-bottom: 20px;
  width: 100%;
  position: relative;
  box-shadow: -2px -2px 12px rgba(0, 0, 0, 0.2), 2px 4px 2px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: #444;
}

.content__img img {
  width: 200px !important;
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
  border: 1px solid white;
  background-color: #222;
}

.bullet i {
  font-size: 20px;
}

.date {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Courier New", Courier, monospace;
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