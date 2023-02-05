<template>
  <div>
    <h1>parents</h1>
    <button @click="addAge">addAge</button>
    <button @click="addMember">addMember</button>
    <button @click="addCount">addCount</button>
    <Child :data="memberList" :count="count"/>
  </div>
</template>
<script>
import { reactive } from '@vue/reactivity';
import { ref } from 'vue';
import Child from './child.vue';


export default {
  name:"testFile",
  setup() {
    let memberList = reactive({data:[]})  //外層包一個data是為了解決reactive重新賦值之後丟失響應式
    let count = ref(0)
    getData()

    function getData(){
      memberList.data = [
        {name:'john' , age:14},
        {name:'mary' , age:18},
      ]
    }
    function addAge(){
      
      memberList.data = memberList.data.map(ele=>{
        ele.age += 1
        return ele
      })
    }

    function addMember(){
      memberList.data.push({name:'ben' , age:30})
    }

    function addCount(){
      count.value ++
    }
    
    return {
      memberList,
      count,
      addAge,
      addMember,
      addCount
    } 
  },
  components:{
    Child
  }
};
</script>

<style lang="scss" scoped>
  
</style>
