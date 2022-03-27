<template>
  <h2>姓名:{{ name }}</h2>
  <h2>年紀:{{ age }}</h2>
  <button @click="changeValue">click</button>
</template>
<script>
import {ref} from 'vue'
export default {
  name:"myRef",
  setup() {
      let name = ref('johnny')
      let age = ref(16)

      function changeValue(){
          name.value = "張三"
          age.value = 20
      }

      return {
          name ,
          age ,
          changeValue
      }
  },
};
</script>
