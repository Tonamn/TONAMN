<template>
  <main>
    <router-view></router-view>
    <div class="index"> 
        <div class="secret-button" @click="displaySecret"></div>
        <img class="logo" :src="logo"/>
        <div class="border title link" @click="component ='HomeView'"> Home </div>
        <div class="link" @click="component ='DaedaleoView'"> Daedaleo Hotel</div>
        <div class="link" @click="component ='BoxView'"> Box</div>
        <div class="border link" @click="component ='CloseView'"> Don't Come Close</div>

        <div class="title">Commission</div>
        <div class="link" @click="component ='DesertView'"> Emergency Landing</div>
        <div class="link" @click="component ='HouseofwoodView'"> House of Wood</div>
        <div class="link" @click="component ='ThreadsomView'"> Threads of Memory</div>
        <div class="link" @click="component ='ShelivesinthemView'"> She lives in Them</div>
        <div class="link" @click="component ='HankiesView'">pick me!</div>
        <div class="border link" @click="component ='GalleryView'"> Gallery Etiquette</div>

        <div class="title">Commercial</div>
        <div class="link" @click="component ='SawanyaView'"> Sawanya</div>
        <div class="link" @click="component ='ProductView'"> Product Photography</div>
        <div class="border link" @click="component ='LogoView'"> Logo Design</div>
        <div class="link" id="secret" @click="hideSecret"> Playground</div>
        <div class="link" @click="component ='cvView'"> cv</div>
    </div>
    <keep-alive>
      <component :is="component"></component>
    </keep-alive>
  </main>
</template>

<script>
import "@/assets/base.css"
import logoT from "./assets/logoT.svg"
import HomeView from "./components/view/HomeView.vue"
import DaedaleoView from "./components/view/DaedaleoView.vue";
import BoxView from "./components/view/BoxView.vue";
import CloseView from "./components/view/CloseView.vue";
import DesertView from "./components/view/DesertView.vue";
import HouseofwoodView from "./components/view/HouseofwoodView.vue";
import ThreadsomView from "./components/view/ThreadsomView.vue";
import ShelivesinthemView from "./components/view/ShelivesinthemView.vue";
import HankiesView from "./components/view/HankiesView.vue";
import GalleryView from "./components/view/GalleryView.vue";
import SawanyaView from "./components/view/SawanyaView.vue";
import ProductView from "./components/view/ProductView.vue";
import LogoView from "./components/view/LogoView.vue";
import PlaygroundView from "./components/view/PlaygroundView.vue";
import cvView from "./components/view/cvView.vue";

export default {
  components: {
    HomeView,
    DaedaleoView,
    BoxView,
    CloseView,
    DesertView,
    HouseofwoodView,
    ThreadsomView,
    ShelivesinthemView,
    HankiesView,
    GalleryView,
    SawanyaView,
    ProductView,
    LogoView,
    PlaygroundView,
    cvView
  },
  data() {
    return {
      logo: logoT,
      component: "HomeView"
    }
  },
  methods : {
    displaySecret() {
      document.getElementById('secret').style.display = "block";
    },
    hideSecret() {
      this.component = 'PlaygroundView'
      document.getElementById('secret').style.display = "none";
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
