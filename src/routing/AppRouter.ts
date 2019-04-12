import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from '../components/AppPages/HomePage/HomePage';
import AboutPage from '../components/AppPages/AboutPage/AboutPage';
import ProjectsPage from '../components/AppPages/ProjectsPage/ProjectsPage';
import ResumePage from '../components/AppPages/ResumePage/ResumePage';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsPage,
    },
    {
      path: '/hire',
      name: 'hire',
      component: ResumePage,
    },
  ],
});
