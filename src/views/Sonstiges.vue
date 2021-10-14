<template>
  <div class="sonstiges">
    <div class="sonstiges__content">
      <div class="sonstiges__content-games">
        <div>
          <h2>DOOM</h2>
          <h2>Assassin’s Creed</h2>
          <h2>GTA V</h2>
          <h2>World of Warcraft</h2>
          <h2>No Mans Sky</h2>
        </div>
      </div>
      <div class="sonstiges__content-training">
        <div>
          <h2>Benchpress</h2>
          <h2>Squat</h2>
          <h2>Row</h2>
          <h2>Deadlift</h2>
          <h2>Press</h2>
        </div>
      </div>
      <div class="sonstiges__content-books">
        <div>
          <h2>DOOM</h2>
          <h2>Assassin’s Creed</h2>
          <h2>GTA V</h2>
          <h2>World of Warcraft</h2>
          <h2>No Mans Sky</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.sonstiges {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;
}

.sonstiges__content {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 0px 100px;
  background-color: rgba(12, 12, 12, 0.7);
  height: 550px;
  border-radius: 10px;
  border: 1px solid lightseagreen;
  box-shadow: -2px -2px 12px rgba(0, 0, 0, 0.6), 2px 4px 4px rgba(0, 0, 0, 0.6);
}

.sonstiges__content-games {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 6px solid black;
  background-image: url("../assets/img/cyberp.jpg");
  background-position-y: 30px;
  background-position-x: 15px;
  color: transparent;
  font-size: 1rem;
  text-align: center;
  background-color: #fcf800;
  background-size: contain;
  background-repeat: no-repeat;
}

.sonstiges__content-games:hover {
  background-image: none;
  transition: color 1s;
  color: black;
}

.sonstiges__content-training {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 6px solid black;
  background-image: url("https://cdn.pixabay.com/photo/2016/03/27/07/08/man-1282232_960_720.jpg");
  background-position-y: 30px;
  color: transparent;
  font-size: 1rem;
  text-align: center;
  background-color: #030303;
  background-size: contain;
  background-repeat: no-repeat;
}

.sonstiges__content-training:hover {
  background-image: none;
  transition: color 1s;
  color: whitesmoke;
}

.sonstiges__content-books {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 6px solid #3b2621;
  background-image: url("https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg?cs=srgb&dl=pexels-min-an-694740.jpg&fm=jpg");
  background-position-y: 30px;
  color: transparent;
  font-size: 1rem;
  text-align: center;
  background-color: #3b2621;
  background-size: contain;
  background-repeat: no-repeat;
}

/* .sonstiges__content-books:hover {
  background-image: none;
  transition: color 1s;
  color: whitesmoke;
} */
</style>