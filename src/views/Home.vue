<template>
  <div class="home">
    <div class="home__content">
      <div class="home__content-contact">
        <img
          src="https://github.com/ThomasSpornraft/portfolio/blob/master/src/assets/profil.png?raw=true"
          alt=""
        />
        <div class="home__content-contact-profiletext">
          <h2><strong>THOMAS</strong> SPORNRAFT</h2>
          <p>
            <i class="fas fa-map-marker-alt"></i>&nbsp;&nbsp; München, Germany
          </p>
        </div>
        <div class="home__content-contact-list">
          <ul>
            <li>
              <a href="tel:+49015170809098"
                ><i class="fas fa-phone"></i>
                <p>0151-70809098</p>
              </a>
            </li>
            <li>
              <a href="mailto:Thomas.Spornraft@web.de"
                ><i class="fas fa-at"></i>
                <p>Thomas.Spornraft@web.de</p>
              </a>
            </li>
            <li>
              <a href="https://github.com/ThomasSpornraft" target="_blank"
                ><i class="fab fa-github"></i>
                <p>GitHub</p>
              </a>
            </li>
            <li>
              <a
                href="https://discordapp.com/users/390962526466080768"
                target="_blank"
                ><i class="fab fa-discord"></i>
                <p>Discord</p>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/thomas-spornraft-5974b71b7/"
                target="_blank"
                ><i class="fab fa-linkedin-in"></i>
                <p>Linked in</p>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/TSpornraft" target="_blank"
                ><i class="fab fa-twitter"></i>
                <p>Twitter</p>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/thomas.spornraft"
                target="_blank"
                ><i class="fab fa-facebook"></i>
                <p>Facebook</p>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/thomasspornraft/?hl=de"
                target="_blank"
                ><i class="fab fa-instagram"></i>
                <p>Instagram</p>
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
</template>



<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>


<style>
.home {
  margin-top: 100px !important;
  width: 70%;
}

@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

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
  background-color: #222;
  gap: 20px;
  font-family: "Montserrat";
}

.home__content {
  display: flex;
  gap: 15px;
}

.home__content-contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 640px;
  width: 300px;
  border-radius: 10px;
  box-shadow: -2px -2px 12px rgba(0, 0, 0, 0.4), 2px 4px 2px rgba(0, 0, 0, 0.4);
}

.home__content-contact img {
  border: 5px solid lightseagreen;
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
  color: lightseagreen;
  margin: 20px 0;
}

.home__content-contact-list {
  margin-bottom: 20px;
}

.home__content-contact-list li {
  list-style: none;
  margin: 4px 0px;
}

.home__content-contact-list a {
  display: flex;
  align-items: center;
  padding-left: 30px;
  color: #aaa;
  gap: 12px;
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