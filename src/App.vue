<template>
  <Nabvar />
  <Categories />
  <router-view></router-view>

  <!-- <Home />

  <GameDetails /> -->
  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Nabvar from "./components/Nabvar.vue";
import Categories from "./components/Categories.vue";
import Home from "./components/Home.vue";
import GameDetails from "./components/GameDetails.vue";


export default {
  name: 'App',
  components: {
    HelloWorld,
    Nabvar,
    Categories,
    Home,
    GameDetails

  }
}
</script>

<style>
.cc
  {
    color: #572589;
  }
  .bc
  {
    background-color: #572589 !important;
  }
</style>
