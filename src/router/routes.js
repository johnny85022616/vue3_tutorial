import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Setup from '../components/setup.vue';
import Ref from '../components/ref.vue';
import Reactive from '../components/reactive.vue';
import Computed from '../components/computed.vue';
import CustomHooks from '../components/customHooks.vue';
import ToRefs from '../components/toRefs.vue';
import Watch from '../components/watch.vue';
import WatchEffect from '../components/watchEffect.vue';
import ShallowReactiveShallowRef from '../components/shallowReactive&shallowRef.vue';
import ReadOnlyShallowReadOnly from '../components/readOnly&shallowReadOnly.vue';
import ToRawMarkRaw from '../components/toRaw&markRaw.vue';
import CustomRef from '../components/customRef.vue'
import Test from '../components/test.vue';

export const routes = [
  {path: '/' , component: Home , id:1 , name:"home"},
  {path:'/setup' , component : Setup , id:2 , name:"setup"},
  {path:'/ref' , component : Ref , id:3 , name:'ref'},
  {path:'/reactive' , component : Reactive , id:4 , name:'reactive'},
  {path:'/computed' , component : Computed , id:5 , name:'computed'},
  {path: '/customHooks' , component: CustomHooks , id:6 , name:"customHooks"},
  {path: '/toRefs' , component: ToRefs , id:7 , name:"toRefs"},
  {path: '/watch' , component: Watch , id:8 , name:"watch"},
  {path: '/watchEffect' , component: WatchEffect , id:9 , name:"watchEffect"},
  {path: '/shallowReactive_shallowRef' , component: ShallowReactiveShallowRef , id:10 , name:"shallowReactive & shallowRef"},
  {path: '/readOnly_shallowReadOnly' , component: ReadOnlyShallowReadOnly , id:11 , name:"ReadOnly & shallowReadOnly"},
  {path: '/toRaw_markRaw' , component: ToRawMarkRaw , id:12 , name:"toRaw & MarkRaw"},
  {path: '/customRef' , component: CustomRef , id:13 , name:"customRef"},
  {path: '/test' , component: Test , id:14 , name:"fadeout練習"},
]

export default createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})