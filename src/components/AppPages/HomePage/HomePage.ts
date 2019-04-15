import content from '@/assets/json/site-content.json';
export default {
  data() {
    return {
      home_img: require('@/assets/me-big.jpg'),
      card_text: content.home['card-text'],
      buttons: [
        { title: 'About', link: '/about' },
        { title: 'Projects', link: '/projects' },
        { title: 'Contact', link: '/hire' },
      ],
    };
  },
};
