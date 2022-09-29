<template>
  <h1>Vue3 練習</h1>
  <ul>
    <li v-for="item in routerArr" :key="item.key">
      <router-link :to="item.path">{{item.name}}</router-link>
    </li>
  </ul>
</template>

<script>
import { ref } from '@vue/reactivity';
import {routes} from '../router/routes';
export default {
  name:'HomePage',
  setup(){
    const routerArr = ref(routes)

    return {
      routerArr
    }
  },
}
</script>