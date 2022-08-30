<template>
  <!-- <setUp></setUp> -->
  <!-- <myRef></myRef> -->
  <!-- <myReactive></myReactive> -->
  <!-- <myComputed></myComputed> -->
  <!-- <setupProps msg="hello"></setupProps> -->
  <!-- <setupContext></setupContext> -->
  <!-- <customHooks></customHooks> -->
  <!-- <toRefs></toRefs> -->
  <!-- <myWatch></myWatch> -->
  <!-- <watchEffect></watchEffect> -->
  <!-- <shallowReactiveShallowRef></shallowReactiveShallowRef> -->
  <!-- <lifeCycle></lifeCycle> -->
  <readOnlyShallowReadOnly></readOnlyShallowReadOnly>
</template>

<script>
// import setUp from "./components/setup.vue"
// import myRef from './components/ref.vue'; 
// import myReactive from './components/reactive.vue'
// import myComputed from './components/computed.vue';
// import setupProps from './components/props/props.vue';
// import setupContext from './components/context/context.vue';
// import customHooks from './components/customHooks.vue';
// import toRefs from './components/toRefs.vue';
// import myWatch from './components/watch.vue';
// import watchEffect from './components/watchEffect.vue';
// import shallowReactiveShallowRef from './components/shallowReactive&shallowRef.vue';
import readOnlyShallowReadOnly from './components/readOnly&shallowReadOnly.vue';
// import lifeCycle from './components/lifeCycle/lifeCycle.vue';
export default {
  name: 'App',
  components: {
    // setUp,
    // myRef,
    // myReactive,
    // myComputed
    // setupProps,
    // setupContext
    // customHooks,
    // toRefs
    // myWatch
    // watchEffect
    // shallowReactiveShallowRef,
    readOnlyShallowReadOnly
    // lifeCycle
  }
}
</script>

<style>

</style>
