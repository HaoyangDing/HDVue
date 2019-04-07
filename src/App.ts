import { Component, Vue } from 'vue-property-decorator';
import AppFrame from './components/AppFrame/AppFrame';

import 'vuetify/dist/vuetify.min.css'; // Ensure you are using css-loader

@Component({
  components: {
    AppFrame,
  },
})
export default class App extends Vue {}
