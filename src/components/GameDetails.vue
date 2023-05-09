<template>
  <div class="container-fluid bg-light">
     <div class="row GameInfo my-4 w-75 mx-auto bg-white">
      <img :src="game.value?.thumbnail" class="w-100">


    </div>

    <div class="row GameInfo my-4 w-75 mx-auto bg-white">

      <p class="lead my-3">{{ game.value?.short_description }}</p>
      <p class="lead my-3">SYBO Games</p>
      <p class="lead my-3">300k Downloads</p>
      <p class="lead my-3">{{ game.value?.title }}</p>
      <p class="lead my-3">DODGE the oncoming trains!</p>
      <p class="lead my-3">Help Jake, Tricky & Fresh escape from the grumpy Inspector and his dog.</p>
      <p class="lead cc">read more</p>
    </div> 

    <RowOfData :allGames="allGames" :type="'Most Popular'" class="shadow" />

  </div>
</template>
    
<script>
import RowOfData from "./RowOfData.vue";


import axios from 'axios';
import { ref, reactive , watch } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'GameDetails',
  components: {
    RowOfData,
  },
  setup() {
    let allGames = reactive([])
    const route = useRoute()
    let game = reactive({})

       const getGames =  async ()=> {
      const res = await axios.get(`http://localhost:3000/Games`);
      allGames.value = [res.data[0], res.data[1], res.data[2], res.data[3], res.data[4], res.data[10]]
      console.log({ allGames })
    }

    const getGameDetails = async ()=> {
      const res = await axios.get(`http://localhost:3000/Games/${route.params.id}`);
      game.value = res.data
      console.log(game)
    }
    //getGameDetails()
    getGames()
    getGameDetails()
    watch(
      () => route.params.id,
      async newId => {
        await getGameDetails(newId)
      }
            )
    return {
      allGames,
      game,
      getGameDetails,
      getGames
    }
  },
  /*data() {
    return {
      game: {},
      allGames: []
    }
  },*/
  methods: {
    /*async getGameDetails() {
      const res = await axios.get(`http://localhost:3000/Games/${this.$route.params.id}`);
      this.game = res.data
    },
    async getGames() {
      const res = await axios.get(`http://localhost:3000/Games`);
      this.allGames = [res.data[0],res.data[1],res.data[2],res.data[3],res.data[4],res.data[10]]
      console.log( {... this.allGames[0]})
    },*/

  },
 /* created() {
    this.getGameDetails()
    this.getGames()
  },*/
 /* watch: {
    $route() {
      this.getGameDetails()
      this.getGames()
    }
  }*/
}
</script>
<style scoped></style>
    
   
    