<template>
  <div class="container-fluid bg-light">
    <Main :main="main" />
    <RowOfData :allGames="allGames" :type="'Most Popular'" class="shadow" />
    <RowOfData :allGames="filterGames" :type="'Most Recommendation'" class="shadow" />
  </div>
</template>
  
<script>
import RowOfData from "./RowOfData.vue";
import Main from "./Main.vue";
import Signin from "./Signin.vue";
import axios from 'axios';

import { ref, reactive, onBeforeMount } from 'vue';


export default {
  name: 'Home',
  components: {
    RowOfData,
    Main,
    Signin
  },
  props: ['main'],

  setup() {
    let allGames = reactive([])
    let filterGames = reactive([])
    let main = reactive({})
    function getGames() {
      axios.get(`http://localhost:3000/Games`).then((res) => {
        console.log(res.data)
        allGames.value = [res.data[0], res.data[1], res.data[2], res.data[3], res.data[4], res.data[10]]
        filterGames.value = [res.data[5], res.data[6], res.data[7], res.data[8], res.data[9], res.data[11]]
        main.value = res.data[30]
      })
    }
    getGames();
    return {
      allGames,
      filterGames,
      main,
      getGames
    }
  },
}

</script>
<style scoped></style>
  
 
  