import { Component, Vue } from 'vue-property-decorator';
import AppFrame from './components/AppFrame/AppFrame';
import AboutPage from './components/AppPages/AboutPage/AboutPage';
import HomePage from './components/AppPages/HomePage/HomePage';

import 'vuetify/dist/vuetify.min.css'; // Ensure you are using css-loader

@Component({
  components: {
    AppFrame,
    AboutPage,
    HomePage,
  },
})
export default class App extends Vue {}
