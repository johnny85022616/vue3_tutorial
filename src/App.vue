<template>
  <!-- <HelloWorld></HelloWorld>
  <setUp></setUp>
  <myRef></myRef>
  <myReactive></myReactive> -->
  <setupProps msg="你好呀" school="FJU"></setupProps>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
// import setUp from "./components/setup.vue"
// import myRef from './components/ref.vue';
// import myReactive from './components/reactive.vue'
import setupProps from './components/setup_props.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld
    // setUp,
    // myRef,
    // myReactive,
    setupProps
  }
}
</script>

<style>

</style>
