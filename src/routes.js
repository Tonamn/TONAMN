import {createRouter, createWebHistory } from 'vue-router'
import HomeView from "./components/view/HomeView.vue"
import DaedaleoView from "./components/view/DaedaleoView.vue";
import BoxView from "./components/view/BoxView.vue";
/* import CloseView from "./components/view/CloseView.vue"; */
import DesertView from "./components/view/DesertView.vue";
import HouseofwoodView from "./components/view/HouseofwoodView.vue";
import ThreadsomView from "./components/view/ThreadsomView.vue";
import ShelivesinthemView from "./components/view/ShelivesinthemView.vue";
import HankiesView from "./components/view/HankiesView.vue";
import GalleryView from "./components/view/GalleryView.vue";
import SawanyaView from "./components/view/SawanyaView.vue";
import ProductView from "./components/view/ProductView.vue";
import LogoView from "./components/view/LogoView.vue";
/* import PlaygroundView from "./components/view/PlaygroundView.vue"; */
import cvView from "./components/view/cvView.vue";

const routes = [
    { path: '/', component: HomeView, name: 'home' },
    { path: '/daedaleo', component: DaedaleoView, name: 'daedaleo' },
    { path: '/box', component: BoxView, name: 'box' },
    { path: '/desert', component: DesertView, name: 'desert' },
    { path: '/houseofwood', component: HouseofwoodView, name: 'houseofwood' },
    { path: '/threads', component: ThreadsomView, name: 'threads' },
    { path: '/shelives', component: ShelivesinthemView, name: 'shelives' },
    { path: '/hankies', component: HankiesView, name: 'hankies' },
    { path: '/gallery', component: GalleryView, name: 'gallery' },
    { path: '/sawanya', component: SawanyaView, name: 'sawanya' },
    { path: '/product', component: ProductView, name: 'product' },
    { path: '/logo', component: LogoView, name: 'logo' },
    { path: '/cv', component: cvView, name: 'cv' },
  ];
  
  const router = createRouter({
    history: createWebHistory('/TONAMN/'),
    routes,
  });
  
  export default router;