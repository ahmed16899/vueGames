<template>
  
        <div class="row w-75 mx-auto mostRecommendation mb-5 p-3 py-5 bg-white rounded-3">
          <div class=" bg-white rounded-3 d-flex justify-content-between aligh-items-center ">
              <p class="m-0 h5 me-2  mb-4  ">{{ props.type }}</p>
              <p class="cc lead m-0 ms-2">SEE ALL</p>
            </div>
          <template v-for="(Gamee, index) in props.allGames.value" :key="Gamee.name">
            <Game   :Gamee="Gamee" />
          </template>
        </div>
  </template>
  
  <script>
import Game from "./Movie.vue";

  export default {
    name: 'RowOfData',
    components: {
    Game
  },
  props: ['allGames', 'type'],

  setup(props) {   
    
    return {
        props
    };
  },

  }
  </script>
  <style scoped>
  .w-50px
  {
    width: 30px;
    margin-left: 20px;
  }
  .input
  {
    outline: 0;
    border: 0;
    padding: 20px;
    width: 100%;
  }
  
</style>
  
 
  