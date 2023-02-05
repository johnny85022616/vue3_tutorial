<template>
  <div>
    {{list}}
  </div>
</template>
<script>
import { reactive } from '@vue/reactivity';
// import { watchEffect } from '@vue/runtime-core';

export default {

  name:"testChildFile",
  props:{
    data:{
      type: Object,
    }
  },
  setup(props) {
    let list = reactive([])
    console.log(props.data);

    // watchEffect(()=>{
    //   console.log(999);
    //   list = props.data
    // })
    return {
      list
    } 
  },
};
</script>

<style lang="scss" scoped>
  
</style>
