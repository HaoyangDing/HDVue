// import { Component, Prop, Vue } from 'vue-property-decorator';

export default {
  data() {
    return {
      drawer: null,
      items: [
        { title: 'Home', icon: 'home' },
        { title: 'About', icon: 'sentiment_very_satisfied' },
        { title: 'Projects', icon: 'build' },
        { title: 'Hire Me?', icon: 'whatshot' },
      ],
      right: null,
    };
  },
};
