<template>
  <div>
    <h1>parents</h1>
    <button @click="addAge">addAge</button>
    <button @click="addMember">addMember</button>
    <Child :data="data"/>
  </div>
</template>
<script>
import Child from './child.vue';


export default {
  name:"testFile",
  data(){
    return {
      data: []
    }
  },
  created(){
    this.getData()
  },
  methods:{
    getData(){
      this.data = [
        {name:'john' , age:14},
        {name:'mary' , age:18},
      ]
    },
    addAge(){
      this.data = this.data.map(ele=>{
        ele.age += 1
        return ele
      })
    },
    addMember(){
      this.data.push({name:'ben' , age:30})
    }
  },
  components:{
    Child
  }
};
</script>

<style lang="scss" scoped>
  
</style>
