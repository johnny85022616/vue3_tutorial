<template>
    <h1>Context</h1>
    <contextEmit @hello='showHellowmsg'></contextEmit>
    <contextSlot>
      <template v-slot:slot1>
        <span>這是填入的內容</span>
      </template>
    </contextSlot>
</template>
<script>
import contextEmit from './emit/emit.vue';
import contextSlot from './slot/slot.vue';
export default {
  name:"setupContext",
  components:{
    contextEmit,
    contextSlot
  },
  setup() { //接收props
    function showHellowmsg(value){
      alert(`觸發父組件中方法，並收到${value}信息`)
    }
    return {
      showHellowmsg
    }
  },
};
</script>
