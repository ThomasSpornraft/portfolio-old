<template>
  <div class="home">
    <div class="home__content">
      <div class="home__content-contact">
        <img
          src="https://github.com/ThomasSpornraft/portfolio/blob/master/src/assets/profil.png?raw=true"
          alt=""
        />
        <div class="home__content-contact-profiletext">
          <p class="title">Thomas Spornraft</p>
          <p>
            <i class="fas fa-map-marker-alt"></i>&nbsp;&nbsp; München, Germany
          </p>
        </div>
        <div class="home__content-contact-list">
          <p>{{ showContact }}</p>
          <ul>
            <li>
              <a
                ><i @click="clickHandler('phone')" class="fas fa-phone"></i>
              </a>
            </li>
            <li>
              <a><i @click="clickHandler('email')" class="fas fa-at"></i> </a>
            </li>
            <li>
              <a href="https://github.com/ThomasSpornraft" target="_blank"
                ><i class="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://discordapp.com/users/390962526466080768"
                target="_blank"
                ><i class="fab fa-discord"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/thomas-spornraft-5974b71b7/"
                target="_blank"
                ><i class="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/TSpornraft" target="_blank"
                ><i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/thomas.spornraft"
                target="_blank"
                ><i class="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/thomasspornraft/?hl=de"
                target="_blank"
                ><i class="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="home__content-main">
        <div class="home__content-main-header">
          <h1>Hello there, it's me, Thomas</h1>
          <p>I am a 40 years old guy from germany</p>
        </div>
        <div class="home__content-main-header-content">
          <p>
            you can find some further informations about me here and if you want
            to get in contact with me, please do so.
          </p>
          <p>I prefer Discord</p>
          <p>
            I can offer German
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg"
              alt=""
            />
            and English
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_the_United_Kingdom.svg"
              alt=""
            />
          </p>
          <p>
            I work at BMW
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg"
              alt=""
            />, if your interest belongs to this business please contact me via
            LinkedIn, so we can share contact informations
          </p>
        </div>
        <div class="home__content-main-footer">
          <p>
            This site is still under construction. I create this one mainly
            because i want to learn VueJs
            <img src="https://vuejs.org/images/logo.svg" alt="" />
          </p>
          <p>
            <a href="#" target="_blank" rel="noopener noreferrer">Impressum</a>
          </p>
        </div>
      </div>
    </div>
  </div>
  <Impressum></Impressum>
</template>



<script>
// @ is an alias to /src
import Impressum from "../components/Impressum.vue";
export default {
  name: "Home",
  data() {
    return {
      showContact: "-",
    };
  },
  components: { Impressum },
  methods: {
    clickHandler(option) {
      if (option == "phone") {
        this.showContact = "+49-151-70809098";
      } else if (option == "email") {
        this.showContact = "Thomas.Spornraft@web.de";
      }
    },
  },
};
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Tangerine:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Monoton&display=swap");
.home {
  display: flex;
  justify-content: center;
  margin-top: 100px !important;
  width: 70%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #122;
  gap: 20px;
  font-family: "Ubuntu";
}

.home__content {
  display: flex;
  gap: 25px;
}

.home__content-contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 640px;
  width: 300px;
  border-radius: 10px;
  background-color: rgba(12, 12, 12, 0.7);
  border: 1px solid lightseagreen;
  box-shadow: -2px -2px 12px rgba(0, 0, 0, 0.4), 2px 4px 2px rgba(0, 0, 0, 0.4);
}

.home__content-contact img {
  border: 5px solid lightseagreen;
  padding: 5px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
}

.home__content-contact img:hover {
  box-shadow: -2px -2px 12px rgba(32, 178, 170, 0.4),
    2px 4px 2px rgba(32, 178, 170, 0.4);
}

.home__content-contact-profiletext {
  text-align: center;

  margin: 20px 0;
}

.home__content-contact-profiletext .title {
  color: lightpink;
  font-family: "Monoton";
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.home__content-contact-list ul {
  display: grid;
  grid-template-rows: 40px 40px;
  grid-template-columns: 30px 30px 30px 30px;

  margin-bottom: 20px;
  margin-top: 20px;
}

.home__content-contact-list li {
  list-style: none;
}

.home__content-contact-list ul li i {
  font-size: 32px;

  cursor: pointer;

  padding: 7px;
}

.home__content-contact-list a {
  align-items: center;
  color: #abc;
  text-decoration: none;
}

.home__content-contact-list a:hover {
  color: lightseagreen;
}

.home__content-main {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 800px;
  border-radius: 10px;
  box-shadow: -2px -2px 12px rgba(0, 0, 0, 0.4), 2px 4px 2px rgba(0, 0, 0, 0.4);
  color: white;
  text-align: center;
  padding: 20px 30px;
  background-color: rgba(12, 12, 12, 0.7);
  border: 1px solid lightseagreen;
}

.home__content-main h1 {
  font-size: 3.5rem;
}

.home__content-main img {
  display: inline-block;
  vertical-align: middle;
  height: 1rem;
}

.home__content-main-header-content {
  text-align: left;
}
</style>