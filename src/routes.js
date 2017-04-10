import Home from './components/home/home.vue';
import Page1 from './components/page1/Page1.vue';
import Page2 from './components/page2/Page2.vue';
import Page3 from './components/page3/Page3.vue';
import login from './components/login/login.vue';


export default [
  {
    path: '/',
    redirect: '/login',
  },{
    path:'/home',
    component: Home,
    redirect: '/page1',
    children:[
      {
        path: '/page1',
        component: Page1,
      }, {
        path: '/page2',
        component: Page2,
      }, {
        path: '/page3',
        component: Page3,
      }
    ]
  }, {
    path: '/login',
    component: login,
  },
];
