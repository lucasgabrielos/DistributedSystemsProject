import Home from './home.js';
import Header from './header.js';
const BodyComponent = {
  components: {
    HeaderComponent: Header,
    HomeComponent: Home
  },
  data(){
    return {
      CoordenatesOfMap: {
        longitude: -8.117202,
        latitude: -34.904949
      }
    }
  },
  template: `
      <div class="w-full min-h-screen">
        <HeaderComponent @update-map-by-coordinates="UpdateMapByCoordenates"/>
        <HomeComponent :coordenates="CoordenatesOfMap" />
      </div>
    `,
    methods: {
      UpdateMapByCoordenates(coordenates){
        console.log(coordenates);
        this.CoordenatesOfMap = {
          longitude: coordenates.longitude,
          latitude: coordenates.latitude
        };
      }
    }
};

export default BodyComponent; 
