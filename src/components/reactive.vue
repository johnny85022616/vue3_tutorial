<template>
  <h2>姓名:{{ person.name }}</h2>
  <h2>年紀:{{ person.age }}</h2>
  <h3>職業:{{ person.job.type }}</h3>
  <h3>薪水:{{ person.job.salary }}</h3>
  <button @click="changeValue">click</button>
</template>
<script>
import {reactive} from 'vue'
export default {

  name:"myReactive",
  setup() {
      // let name = ref('johnny')
      // let age = ref(16)
      // const job = reactive({
      //   type:"engineer" , 
      //   salary:40000
      // })

      let person = reactive({
        name:'johnny' ,
        age:16 ,
          job:{
          type:"engineer" , 
          salary:40000
          }
      })
    

      function changeValue(){
          // name.value = "張三"
          // age.value = 20
          // job.type = "teacher"
          // job.salary = 32000

          person.job.type = 'teacher'
          person.job.salary = 4000
      }

      return {
          person ,
          changeValue,
      } 
  },
};
</script>
