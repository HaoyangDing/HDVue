import { Component, Vue } from 'vue-property-decorator';
import AppFrame  from './components/AppFrame/AppFrame';

@Component({
  components: {
    AppFrame
  },
})
export default class App extends Vue {}