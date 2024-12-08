import Home from './home.js';
import Header from './header.js';
const BodyComponent = {
  components: {
    HeaderComponent: Header,
    HomeComponent: Home
  },
  data() {
    return {
      CoordenatesOfMap: { 
        longitude: -34.90326546131544,
        latitude: -8.051395038138429,
      },
      ListCoordenates: [] // Inicializado como array
    };
  },
  
  template: `
      <div class="w-full min-h-screen">
        <HeaderComponent @update-map-by-coordinates="UpdateMapByCoordenates"/>
        <HomeComponent
          :coordenates="CoordenatesOfMap" 
          :list_organizations="ListCoordenates"   />
      </div>
    `,
    methods: {
      UpdateMapByCoordenates(coordenates){
        this.CoordenatesOfMap = {
          longitude: coordenates.longitude,
          latitude: coordenates.latitude
        };
      },
      GetActualPosition(){
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    this.CoordenatesOfMap.latitude = position.coords.latitude;
                    this.CoordenatesOfMap.longitude =  position.coords.longitude;
                    console.log(this.CoordenatesOfMap);
                },
                (error) => {
                    console.log(error);
                    console.error('Erro ao obter localização:', error.message);
                }
            );
        } else {
            console.error('Geolocalização não é suportada neste navegador.');
        }
      },
      GetListOrganizations(){
        axios.get('https://localhost:7198/api/Organization/ListOrganization', {   }).then(response => {
          this.ListCoordenates = response.data;
          console.log(this.ListCoordenates);
        }).catch(error => {
            console.log(error);
        });
      }
    },
    mounted() {
      this.GetListOrganizations();
    },
};

export default BodyComponent; 