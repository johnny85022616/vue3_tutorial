<template>
  <div>
    <h1>Child</h1>
    <div>{{data}}</div>
    <div>{{ count }}</div>
  </div>
</template>
<script>
// import { reactive } from '@vue/reactivity';
// import { watchEffect } from '@vue/runtime-core';

export default {

  name:"testChildFile",
  props:{
    data:{
      type: Object,
    },
    count:{
      type: Number
    }
  },
  setup(props) {
    console.log(props.data);
    console.log(props.count);
  
    return {
    } 
  },
};
</script>

<style lang="scss" scoped>
  
</style>
