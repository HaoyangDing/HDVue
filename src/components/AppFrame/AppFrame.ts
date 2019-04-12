// import { Component, Prop, Vue } from 'vue-property-decorator';

export default {
  data() {
    return {
      drawer: null,
      items: [
        { title: 'Home', icon: 'home', link: '/' },
        { title: 'About', icon: 'sentiment_very_satisfied', link: '/about' },
        { title: 'Projects', icon: 'build', link: '/projects' },
        { title: 'Hire Me?', icon: 'whatshot', link: '/hire' },
      ],
    };
  },
};
