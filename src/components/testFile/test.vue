<template>
  <div>
    <h1>parents</h1>
    <div>{{ memberList.data }}</div>
    <button @click="addAge">addAge</button>
    <button @click="addMember">addMember</button>
    <button @click="addCount">addCount</button>
    <button @click="addJohnAge">addJohnAge</button>
    <div>{{ personList }}</div>
    <button @click="addPersonAge">addPersonAge</button>
    <Child :data="memberList" :count="count"/>
  </div>
</template>
<script>
import { reactive } from '@vue/reactivity';
import { ref , watch} from 'vue';
import Child from './child.vue';


export default {
  name:"testFile",
  setup() {
    let memberList = reactive({data:[]})  //外層包一個data是為了解決reactive重新賦值之後丟失響應式
    let count = ref(0)
    let personList = reactive([
        {name:'john' , age:14},
        {name:'mary' , age:18},
      ])

    console.log("personList",personList);  
    getData()

    function getData(){
      memberList.data = [
        {name:'john' , age:14},
        {name:'mary' , age:18},
      ]
    }

    function addAge(){
      
      memberList.data = memberList.data.map(ele=>{   //若要遍歷不可用map(因為map中會把ele變為proxy對象，改變原本proxy內結構)
        ele.age += 1
        return ele
      })

      // memberList.data.forEach((ele , index , array)=>{
      //   array[index].age += 1 
      // })
      console.log("999",memberList.data);
    }

    function addMember(){
      memberList.data.push({name:'ben' , age:30})
      console.log(1010 , memberList.data);
    }

    function addCount(){
      count.value ++
    }

    function addJohnAge(){
      memberList.data[0].age += 1
    }

    function addPersonAge(){
      personList = personList.map(ele => {
        ele.age += 1
        return ele
      })
   
    }

    watch(()=> memberList.data , (newVal)=>{
      console.log('watch',newVal);
    },{deep:true})

    
    return {
      memberList,
      personList,
      count,
      addAge,
      addMember,
      addCount,
      addJohnAge,
      addPersonAge
    } 
  },
  components:{
    Child
  }
};
</script>

<style lang="scss" scoped>
  
</style>
