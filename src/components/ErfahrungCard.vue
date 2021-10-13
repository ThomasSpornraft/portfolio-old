<template>
  <div class="content" v-for="item in items" :key="item.id">
    <div class="content__img">
      <!--  <img :src="item.image" :alt="item.image_alt" /> -->
    </div>
    <div class="bullet">
      <!-- <img src="../assets/img/BMW.svg" /> -->
      <img :src="require(`@/${item.image}`)" />
      <!-- "require(`@/${card.img_url}`)" -->
    </div>
    <div class="date">
      <p>{{ item.start }}</p>
      <p>{{ item.end }}</p>
    </div>
    <div class="description">
      <h2>{{ item.title }}</h2>
      <h4>{{ item.subtitle }}</h4>
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
          start: "2001",
          end: "2005",
          title: "BMW Motorenbau",
          subtitle: "Prototypen, Sondermotoren und Formel 1",
          Beschreibung:
            "Manuelle bearbeitung von Motor-Kernbauteilen (Kurbelgehäuse, Zylinderkopf und Kurbelwelle) für BMW Formel 1 Motoren und Prototypen für Serienmotoren",
          image: "assets/img/BMW.svg",
        },
        {
          id: 2,
          start: "2005",
          end: "2008",
          title: "BMW Motorenbau",
          subtitle: "Prototypen, Sondermotoren und Formel 1",
          Beschreibung: "",
          image: "assets/img/BMW.svg",
        },
        {
          id: 3,
          start: "2008",
          end: "2009",
          title: "BMW Motorenbau",
          subtitle: "Prototypen, Sondermotoren und Formel 1",
          image: "assets/img/BMW.svg",
        },
        {
          id: 4,
          start: "2009",
          end: "2011",
          title: "BMW Motorenbau",
          subtitle: "Technologieentwicklung Antrieb",
          Beschreibung: "",
          image: "assets/img/BMW.svg",
        },
        {
          id: 5,
          start: "2011",
          end: "-",
          title: "BMW Einkauf",
          subtitle: "Getriebe und Schaltungen",
          Beschreibung: "",
          image: "assets/img/BMW.svg",
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
  color: #abc;
  min-height: 100px;
  margin-bottom: 30px;
  width: 100%;
  position: relative;
  box-shadow: -2px -2px 12px rgba(0, 0, 0, 0.2), 2px 4px 2px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 20px;
  background-color: rgba(12, 12, 12, 0.7);
  border: 1px solid lightseagreen;
}

.bullet {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: -25px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid lightseagreen;
  background-color: rgba(12, 12, 12, 0.7);
}

.bullet img {
  width: 100%;
  height: 100%;
}

.date {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 15%;
  font-size: 1.3em;
}
.description {
  display: flex;
  flex-direction: column;
  width: 80%;
  text-align: left;
}
.description i {
  margin-left: 10px;
}
</style>