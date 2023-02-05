<template>
  <div>
    <h1>parents</h1>
    <button @click="addAge">addAge</button>
    <button @click="addMember">addMember</button>
    <Child :data="data"/>
  </div>
</template>
<script>
import { reactive } from '@vue/reactivity';
import Child from './child.vue';


export default {
  name:"testFile",
  setup() {
    let data = reactive([])

    getData()

    function getData(){
      data = [
        {name:'john' , age:14},
        {name:'mary' , age:18},
      ]
    }
    function addAge(){
      data = data.map(ele=>{
        ele.age += 1
        return ele
      })
    }

    function addMember(){
      data.push({name:'ben' , age:30})
    }
    
    return {
      data,
      addAge,
      addMember
    } 
  },
  components:{
    Child
  }
};
</script>

<style lang="scss" scoped>
  
</style>
