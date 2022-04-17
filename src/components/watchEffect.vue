<template>
  <h1>ref監測</h1>
  <h2>當前值:{{ count }}</h2>
  <h2>當前文字:{{ text }}</h2>
  <button @click="count++">+1</button>
  <button @click="text+='~'">修改訊息</button>
  <h1>reactive監測</h1>
  <h2>名字:{{ person.name }}</h2>
  <h2>年齡:{{ person.age }}</h2>
  <h3>薪水:{{ person.job.j1.salary }}k</h3>
  <button @click="person.name += '~'">修改名字</button>
  <button @click="person.age++">增長年齡</button>
  <button @click="person.job.j1.salary++">加薪</button>
</template>
<script>
import { reactive, ref } from "@vue/reactivity";
import { watchEffect } from '@vue/runtime-core';
export default {
  name: "watchEffect",
  setup() {
    let count = ref(0);
    let text = ref("你好呀");
    let person = reactive({
      name: "張三",
      age: 19,
      job: {
        j1: {
          salary: 40,
        },
      },
    });
    /*
      與watch比較
      watch:要指定要監視的屬性，可以取得old值與new值
      watchEffect:監視所有在watchEffect所用到的屬性(若在watchEffect中沒被用到就不會被監視，
                  所以就算該值有所變化也不會執行watchEffect回調)，但無法得到old值與new值
      與computed比較
      computed:較注重本身依賴屬性所計算出來的值，所以必須要有retrun值
      watchEffect:注重的是狀態改變的過程，所以不需要有return值

    */
    watchEffect(()=>{
      console.log('watchEffect callback被執行!!');
    })
    return {
      count,
      text,
      person,
    };
  },
};
</script>
