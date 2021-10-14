<template>
  <div v-for="card in cards" :key="card.id" class="skillcard">
    <div class="skillcard__head">
      <div class="scillcard__head-logo">
        <img :src="require(`@/${card.img_url}`)" :alt="card.img_alt" />
      </div>
      <div class="scillcard__head-title">
        <h2>{{ card.title }}</h2>
      </div>
    </div>
    <div class="skillcard__body">
      <div class="skillcard__body-item">
        <details>
          <summary>über {{ card.description }}</summary>
          {{ card.descriptionDetails }}
        </details>
      </div>
      <div class="skillcard__body-item">
        <details open>
          <summary>Selbstbewertung</summary>
          <div v-for="(key, value) in card.scores" :key="key" class="score">
            <div class="score__container">
              <p>{{ value }}</p>
              <progress :value="key" max="100"></progress>
            </div>
          </div>
        </details>
      </div>
      <div class="skillcard__body-item">
        <details>
          <summary>Kurse</summary>
          <div class="kurs">
            <p>Lorem ipsum dolor, sit amet</p>
            <img class="udemy" src="../assets/udemy.png" alt="" />
            <p class="kurs-prozent">100%</p>
            <i class="fas fa-check-circle green"></i>
          </div>
          <div class="kurs">
            <p>Lorem ipsum dolor</p>
            <img class="udemy" src="../assets/udemy.png" alt="" />
            <p class="kurs-prozent gelb">75%</p>
            <i class="fas fa-minus-circle gelb"></i>
          </div>
          <div class="kurs">
            <p>Lorem ipsum dolor, sit amet</p>
            <img class="udemy" src="../assets/udemy.png" alt="" />
            <p class="kurs-prozent rot">33%</p>
            <i class="fas fa-times-circle rot"></i>
          </div>
        </details>
      </div>
      <div class="skillcard__body-item">
        <details>
          <summary>Projekte</summary>
          <div class="projekt">
            <p>noch keins</p>
          </div>
          <div class="projekt">
            <p>sehr kleines Projekt</p>
          </div>
          <div class="projekt">
            <p>mittleres Projekt</p>
          </div>
        </details>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          id: 1,
          title: "HTML",

          scores: {
            Total: 85,
            Forms: 70,
            Buttons: 60,
          },

          img_url: "assets/img/html.svg",
          img_alt: "HTML logo",
          description: "HTML",
          descriptionDetails:
            "Die Hypertext Markup Language (HTML, englisch für Hypertext-Auszeichnungssprache) ist eine textbasierte Auszeichnungssprache zur Strukturierung elektronischer Dokumente wie Texte mit Hyperlinks, Bildern und anderen Inhalten. HTML-Dokumente sind die Grundlage des World Wide Web und werden von Webbrowsern dargestellt.",
        },
        {
          id: 2,
          title: "CSS",

          scores: {
            Total: 85,
            Selektoren: 70,
            "Box-Modell": 90,
            Flexbox: 80,
            Grid: 60,
            Animations: 50,
            MediaQueries: 50,
          },

          img_url: "assets/img/css3.svg",
          img_alt: "CSS logo",
          description: "CSS",
          descriptionDetails:
            "Cascading Style Sheets (englische Aussprache [kæsˌkeɪdɪŋˈstaɪlʃiːts]; für gestufte Gestaltungsbögen; kurz: CSS) ist eine Stylesheet-Sprache für elektronische Dokumente und zusammen mit HTML und JavaScript eine der Kernsprachen des World Wide Webs.[1][2] Sie ist ein sogenannter „living standard“ (lebendiger Standard) und wird vom World Wide Web Consortium (W3C) beständig weiterentwickelt. Mit CSS werden Gestaltungsanweisungen erstellt, die vor allem zusammen mit den Auszeichnungssprachen HTML und XML (zum Beispiel bei SVG) eingesetzt werden",
        },

        {
          id: 3,
          title: "JavaScript",
          scores: {
            Total: 75,
            VUE: 80,
            React: 60,
            Angular: 60,
            fetch: 50,
            axios: 30,
            nodeJs: 15,
            expressJS: 25,
          },
          img_url: "assets/img/javascript.svg",
          img_alt: "JavaScript Logo",
          description: "JavaScript",
          descriptionDetails:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus alias aliquid consequuntur delectus eius accusamus quasi a omnis velit, repellendus mollitia sit, explicabo voluptate. Molestias molestiae animi eos harum assumenda, nihil cumque consequuntur impedit dolorum illum, blanditiis, magni consectetur! Corporis quam mollitia recusandae, pariatur asperiores exercitationem modi doloribus nulla",
        },
        {
          id: 4,
          title: "Excel",
          scores: {
            Total: 85,
            Tabellen: 80,
            Formeln: 80,
            Funktionen: 70,
            "Pivot Tabellen": 60,
            "Power Query": 70,
            VBA: 35,
            Diagramme: 45,
          },
          img_url: "assets/img/excel.svg",
          img_alt: "Excel Logo",
          description: "Microsoft Excel",
          descriptionDetails:
            "Microsoft Excel ist das am weitesten verbreitete Tabellenkalkulationsprogramm. Excel gehört zum Microsoft-Office-365-Abonnement und ist in der Desktop-Version für Windows und macOS, sowie in der mobilen Version als App für Android und iOS verfügbar.",
        },

        {
          id: 5,
          title: "Power BI",
          scores: {
            Total: 75,
            Imports: 70,
            Datenmodell: 50,
            Funktionen: 70,
            Visuals: 60,
            "Power Query": 70,
            DAX: 45,
            "M-Language": 25,
          },
          img_url: "assets/img/powerbi.svg",
          img_alt: "Power BI Logo",
          description: "Power BI",
          descriptionDetails:
            "Power BI ist ein Geschäftsanalysedienst von Microsoft. Ziel ist es, interaktive Visualisierungen und Business-Intelligence-Funktionen mit einer Oberfläche bereitzustellen, die so einfach ist, dass Endbenutzer ihre eigenen Berichte und Dashboards erstellen können.",
        },
        {
          id: 6,
          title: "Python",
          scores: {
            Total: 65,
            Grundlagen: 70,
            Datenstrukturen: 70,
            pandas: 80,
            Charts: 40,
            GUI: 20,
          },
          img_url: "assets/img/python.svg",
          img_alt: "python Logo",
          description: "python",
          descriptionDetails:
            "Python ist eine universelle, üblicherweise interpretierte, höhere Programmiersprache. Sie hat den Anspruch, einen gut lesbaren, knappen Programmierstil zu fördern. So werden beispielsweise Blöcke nicht durch geschweifte Klammern, sondern durch Einrückungen strukturiert.",
        },
      ],
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Mulish&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");

.skillcard {
  display: flex;
  flex-direction: column;
  height: max-content;
  width: 300px;
  color: #abc;

  text-align: left;
  font-family: "Ubuntu";
  border-radius: 10px;
  background-color: rgba(12, 12, 12, 0.7);
  border: 1px solid lightseagreen;
  box-shadow: -2px -2px 12px rgba(0, 0, 0, 0.2), 2px 4px 2px rgba(0, 0, 0, 0.2);
}
.skillcard__head {
  display: flex;
  color: white;
  /* macht den Head noch etwas dunkler */
  background-color: rgba(12, 12, 12, 0.7);
  border-bottom: 1px solid black;
  height: 70px;
  padding: 15px;
  border-radius: 10px 10px 0 0;
}
.skillcard__head-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 10%;
}
.scillcard__head-logo > img {
  width: 100%;
  height: 100%;
}
.scillcard__head-title {
  display: flex;
  align-items: center;
  width: 90%;
  padding-left: 15px;
}
.skillcard__body-item {
  padding: 0px 15px;
}
.skillcard__body-item:not(.skillcard__body-item:last-child) {
  border-bottom: 1px solid #555;
}
.skillcard__body-item summary {
  font-size: 1rem;
  margin-top: 6px;
  margin-bottom: 6px;
}
.skillcard__body-item details {
  font-size: 0.8rem;
  margin-bottom: 10px;
}
.skillcard__body-item summary:hover {
  cursor: pointer;
}
.score {
  align-items: center;
  flex-direction: column;
  padding: 2px 20px 2px 20px;
}
.score p {
  font-size: 0.8rem;
}
.score__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 0.8;
}
.score__container:hover {
  opacity: 1;
}
.kurs {
  display: flex;
  align-items: center;
  gap: 5px;
}
.kurs i {
  font-size: 12px;
}
.kurs i.green {
  color: lightgreen;
}
.kurs i.gelb {
  color: #e0c989;
}
.kurs i.rot {
  color: #f27783;
}
.udemy {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}
.kurs-prozent {
  display: flex;
  line-height: 12px;
  background-color: lightgreen;
  color: black;
  font-size: 0.6rem;
  height: 12px;
  padding: 0px 5px;
  border-radius: 10px;
}
.kurs-prozent.gelb {
  background-color: #e0c989;
}
.kurs-prozent.rot {
  background-color: #f27783;
}
.projekt {
  display: inline-block;
  margin: 4px;
}
.projekt p {
  display: inline;
  background-color: #222;
  padding: 3px 10px;
  border-radius: 30px;
}
</style>
