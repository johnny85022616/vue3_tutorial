<template>
  <h1>Scope 介紹</h1>
  <p>父類別文字</p>
  <child></child>
</template>
<script>
import child from './child.vue';
export default {
  name:"parentComponent",
  components:{
    child
  },
  setup() {
    
  },
}
</script>

<style lang="scss" scoped>
  p{
    color:red   
  }  
  :deep p {
    color: green
  }
</style>  