import Vue from 'vue';
import Router from 'vue-router';
import CTSReader from '@/cts/components/Reader';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/cts',
      name: 'CTSReader',
      component: CTSReader,
    },
  ],
});