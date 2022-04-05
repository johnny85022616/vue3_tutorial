<template>
    Slot區塊
    <slot name='slot1'></slot>
</template>
<script>

export default {
  name:"contextSlot",
  setup(props,context) { //接收props
    console.log(context);
    const handleEmit = ()=>{
        context.emit('hello' , 'hello')  //觸發父類別自定義事件
    }
    return {
      handleEmit
    }  
  },
};
</script>
