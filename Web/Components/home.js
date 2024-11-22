const HomeComponent = {
    props: {
        coordenates: {
            type: Object,
            required: true,
        },
    },
    template: `
    <div class="flex h-screen w-screen">
      <div class="w-1/3 h-full bg-white flex flex-col items-center justify-center">
        
      </div>
      <div id="map" class="h-full w-2/3"></div>

     
      
    </div>
  `,
    data() {
        return {
            map: null, // Referência ao mapa
            marker: null, // Referência ao marcador
        };
    },
    watch: {
        coordenates: {
            handler(val) {
                if (this.map) {
                    // Atualiza o mapa para a nova posição
                    this.map.setView([val.latitude, val.longitude], 13);

                    // Atualiza o marcador para a nova posição
                    if (this.marker) {
                        this.marker.setLatLng([val.latitude, val.longitude]);
                    }
                }
            },
            immediate: true, // Para mover o mapa logo na inicialização
        },
    },
    methods: {
        MountMapByCoordinates() {
            const { longitude, latitude } = this.coordenates;

            // Cria o mapa apenas se ainda não existir
            if (!this.map) {
                this.map = L.map('map', {
                    center: [latitude, longitude],
                    zoom: 13,
                    zoomControl: false,
                });

                // Adiciona os tiles ao mapa
                const map1 = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                });
                const hot = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
                    maxZoom: 19,
                    attribution:
                        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>',
                });

                map1.addTo(this.map);

                // Adiciona controle de camadas
                L.control.layers(
                    {
                        Osm: map1,
                        Humanitarian: hot,
                    },
                    null,
                    { collapsed: false }
                ).addTo(this.map);

                // Adiciona o marcador inicial
                this.marker = L.marker([latitude, longitude]);
                this.marker.addTo(this.map);

                // Corrige possíveis problemas de renderização
                setTimeout(() => {
                    this.map.invalidateSize();
                }, 100);
            }
        },
    },
    mounted() {
        this.MountMapByCoordinates();
    },
};

export default HomeComponent;
