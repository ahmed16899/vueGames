<template>
    <Signin class="pa" v-show="show"/>

    <nav class=" d-flex justify-content-between align-items-center w-50 m-auto">
      <div class="">
        <img src="/l.PNG"  class="w-100">
      </div>
      <div class="">
       <router-link :to="`/home`" ><img  src="/search.svg" class="w-50px cc"></router-link> 
        <img src="/dots.svg" class="w-50px cc" @click="$event=> show = !show"> 
      </div>  
    </nav>
  </template>
  
  <script>
import Signin from "./Signin.vue";
import { ref , reactive } from 'vue';

  export default {
    name: 'Nabvar',
    components: {
      Signin
  },
  data()
  {
    return{
        show:false
    }
  },
  setup() {
    let show =ref(false) 
    return {
      show ,
    }
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
  .pa
  {
    position: absolute;
    left: 60%;
    top: 20%;
  }
  
</style>
  
 
  