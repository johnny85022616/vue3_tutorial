import { createRouter, createWebHashHistory } from "vue-router";
import Emit from '../components/context/emit/emit.vue';
import Slot from '../components/context/slot/slot.vue';

export const routes = [
  {
    path: "/",
    component: ()=>import(/* webpackChunkName: "Home" */ "../components/Home.vue"),
    id: 1,
    name: "home",
  },
  {
    path: "/setup",
    component: () =>
      import(/* webpackChunkName: "Setup" */ "../components/setup.vue"),
    id: 2,
    name: "setup",
  },
  {
    path: "/ref",
    component: () =>
      import(/* webpackChunkName: "Ref" */ "../components/ref.vue"),
    id: 3,
    name: "ref",
  },
  {
    path: "/reactive",
    component: () =>
      import(/* webpackChunkName: "Reactive" */ "../components/reactive.vue"),
    id: 4,
    name: "reactive",
  },
  {
    path: "/computed",
    component: () =>
      import(/* webpackChunkName: "Computed" */ "../components/computed.vue"),
    id: 5,
    name: "computed",
  },
  {
    path: "/customHooks",
    component: () =>
      import(
        /* webpackChunkName: "CustomHooks" */ "../components/customHooks.vue"
      ),
    id: 6,
    name: "customHooks",
  },
  {
    path: "/toRefs",
    component: () =>
      import(/* webpackChunkName: "ToRefs" */ "../components/toRefs.vue"),
    id: 7,
    name: "toRefs",
  },
  {
    path: "/watch",
    component: () =>
      import(/* webpackChunkName: "Watch" */ "../components/watch.vue"),
    id: 8,
    name: "watch",
  },
  {
    path: "/watchEffect",
    component: () =>
      import(
        /* webpackChunkName: "WatchEffect" */ "../components/watchEffect.vue"
      ),
    id: 9,
    name: "watchEffect",
  },
  {
    path: "/shallowReactive_shallowRef",
    component: () =>
      import(
        /* webpackChunkName: "ShallowReactiveShallowRef" */ "../components/shallowReactive&shallowRef.vue"
      ),
    id: 10,
    name: "shallowReactive & shallowRef",
  },
  {
    path: "/readOnly_shallowReadOnly",
    component: () =>
      import(
        /* webpackChunkName: "readOnly&shallowReadOnly" */ "../components/readOnly&shallowReadOnly.vue"
      ),
    id: 11,
    name: "ReadOnly & shallowReadOnly",
  },
  {
    path: "/toRaw_markRaw",
    component: () =>
      import(
        /* webpackChunkName: "ToRaw&markRaw" */ "../components/toRaw&markRaw.vue"
      ),
    id: 12,
    name: "toRaw & MarkRaw",
  },
  {
    path: "/customRef",
    component: () =>
      import(/* webpackChunkName: "CustomRef" */ "../components/customRef.vue"),
    id: 13,
    name: "customRef",
  },
  {
    path: "/provideInject",
    component: () =>
      import(
        /* webpackChunkName: "provide&Inject" */ "../components/provide-inject/provideInject.vue"
      ),
    id: 14,
    name: "Provide & Inject",
  },
  {
    path: "/context",
    component: ()=>import(
      /* webpackChunkName: "context" */ "../components/context/context.vue"
    ),
    id: 15,
    name: "context",
    children: [
      {
        path: "emit", 
        component: Emit,
      },
      {
        path: "slot",
        component: Slot,
      },
    ],
  },
  {
    path: "/test",
    component: () =>
      import(/* webpackChunkName: "Test" */ "../components/test.vue"),
    id: 14,
    name: "fadeout練習",
  },
];

export default createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});
