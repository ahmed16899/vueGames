<template>
    <div class="col-lg-2 positionR d-flex flex-column justify-content-between align-items-center">
        
            <img :src="props.Gamee.thumbnail"  class="w-100">
            <p>{{ props.Gamee.title }}</p>
            <router-link :to="`/game/${props.Gamee.id}`" class="btn bc text-white">More Info</router-link>
            <div class="positionA bg-white rounded-3 px-3 d-flex align-items-center justify-content-center">
             
              <img src="/star2.svg"  class="w">
              <p class="m-0">4.9</p>

            </div>
       
    </div>
  </template>
  
  <script>

  export default {
    name: 'Game',
    props: ['Gamee'],
    setup(props) {   
    return {
        props
    };
  },
  }
  
  </script>
  <style scoped>
  .w
  {
    width: 30px;
  }
  .positionR
  {
    position: relative;
  }
  .positionA
  {
    position: absolute;
    top: 20px;
    left: 20px;
  }
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
  
 
  