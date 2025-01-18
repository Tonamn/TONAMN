<template>
  <main>
    <div class="index"> 
        <div class="secret-button" @click="displaySecret"></div>
        <img class="logo" :src="logo"/>
        <div class="border title link" @click="goToRoute('home')"> Home </div>
        <div class="link" @click="goToRoute('daedaleo')"> Daedaleo Hotel</div>
        <div class="link" @click="goToRoute('box')"> Box</div>
       <!-- <div class="border link" @click="component ='CloseView'"> Don't Come Close</div> -->

        <div class="title">Commission</div>
        <div class="link" @click="goToRoute('desert')"> Emergency Landing</div>
        <div class="link" @click="goToRoute('houseofwood')"> House of Wood</div>
        <div class="link" @click="goToRoute('threads')"> Threads of Memory</div>
        <div class="link" @click="goToRoute('shelives')"> She lives in Them</div>
        <div class="link" @click="goToRoute('hankies')">pick me!</div>
        <div class="border link" @click="goToRoute('gallery')"> Gallery Etiquette</div>

        <div class="title">Commercial</div>
        <div class="link" @click="goToRoute('sawanya')"> Sawanya</div>
        <div class="link" @click="goToRoute('product')"> Product Photography</div>
        <div class="border link" @click="goToRoute('logo')"> Logo Design</div>
       <!-- <div class="link" id="secret" @click="hideSecret"> Playground</div> -->
        <div class="link" @click="goToRoute('cv')"> cv</div>
    </div>
    <!-- This will render the active component based on route -->
    <router-view></router-view>
  </main>
</template>

<script>
import "@/assets/base.css"
import logoT from "./assets/logoT.svg"

export default {
  data() {
    return {
      logo: logoT,
    }
  },
  methods : {
    displaySecret() {
      document.getElementById('secret').style.display = "block";
    },
    hideSecret() {
      this.goToRoute('playground')
      document.getElementById('secret').style.display = "none";
    },
    goToRoute(route) {
      // Dynamically change the route on click
      this.$router.push({name: route})
    }

  }

}
</script>

<style>

.index {
    width: 250px;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    padding: 20px 40px 40px 40px ; /* top bottom right left*/
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    font-weight: 300;
    font-family: helvetica;
    font-size: 0.85rem;
    color:black;
}

.logo {
  margin-bottom: 50px;
  width: 130px;
  place-self: center;
}

.secret-button {
  height: 18px;
  width: 18px;
  border-radius: 10px;
  position: absolute;
  top: 15%;
  left: 70%;
  /* background-color: #8B0000; */
}

.secret-button:hover {
  cursor: help;
}

.link:hover {
  cursor: grabbing;
}

.house-container {
  display: flex;
  flex-direction: row;
  height: 100vh;
}

.title {
  font-weight: 550;
  font-family: helvetica;
  color:black;
}

.border {
  margin-bottom: 20px;
}

#secret {
  color: #8B0000;
  display: none;
}

</style>
