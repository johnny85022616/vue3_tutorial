<template>
<h2>名字:{{ person.name }}</h2>
  <h2>年齡:{{ person.age }}</h2>
  <h3>薪水:{{ person.job.j1.salary }}k</h3>
  <button @click="person.name += '~'">修改名字</button>
  <button @click="person.age++">增長年齡</button>
  <button @click="person.job.j1.salary++">加薪</button>
</template>

<script>
import { reactive , toRefs } from '@vue/reactivity';

export default {
  setup() {
    let person = reactive({
      name: 'johnny',
      age: 16,
      job:{
        j1: {
          salary: 40,
        },
      },
      hobby: ['打球', '玩電腦', '游泳']
    })

    person = toRefs(person);
    console.log(person);
    return {
      person
    }
  },
};
</script>
