<template>
    <div class="row w-75 mx-auto py-5">
        <div class="col-md-9">
            <div class="content">
                <img :src="props.main?.value?.thumbnail" class="w-100">
            </div>
        </div>
        <div class="col-md-3">
            <div class="content">
                <p class="h3 my-4">{{props.main?.value?.title}}</p>
                <p class="h5 my-4">{{props.main?.value?.short_description}}</p>
                <p class="h5 my-4">SURF the urban wave!
                    DODGE the oncoming trains!
                </p>
                <p class="lead my-4">300k Downloads</p>
                <button class="btn bc text-white">More Info</button>
            </div>
        </div>
    </div>
</template>
  
<script>

export default {

    name: 'Main',
    props: ['main'],
    setup(props) {   
    
    return {
        props
    };
  },
}
</script>
<style scoped>
.positionR {
    position: relative;
}

.positionA {
    position: absolute;
    top: 20px;
    left: 20px;
}

.w-50px {
    width: 30px;
    margin-left: 20px;
}

.input {
    outline: 0;
    border: 0;
    padding: 20px;
    width: 100%;
}
</style>
  
 
  