import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        channels: () => import(/* webpackChunkName: "Home" */ '@/components/pages/Home.vue'),
      },
    },
    {
      path: '/channel/:channelId',
      name: 'channel-detail',
      components: {
        channels: () => import(/* webpackChunkName: "ChannelDetailsView" */ '@/components/pages/ChannelDetailsView.vue'),
      },
    },
  ],
});
