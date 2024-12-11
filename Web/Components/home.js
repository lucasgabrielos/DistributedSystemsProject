const HomeComponent = {
    props: {
        coordenates: {
            type: Object,
            required: true,
        },
        list_organizations: {
            type: Array,
            required: true
        },
    },
    template: `
    <div class="flex h-screen w-screen">
      <div id="map" class="h-full w-full"></div>
    </div>
  `,
    data() {
        return {
            map: null,
            markers: [],
        };
    },
    watch: {
        coordenates: {
            handler(val) {
                if (this.map) {
                    this.map.setView([val.latitude, val.longitude], 13);
        
                    if (this.marker) {
                        this.marker.setLatLng([val.latitude, val.longitude]);
                    }
                }
            },
            immediate: true, // Para mover o mapa logo na inicialização
        },
        list_organizations: {
            handler(val) {
                if (this.map && Array.isArray(val)) {
                    this.clearMarkers(); // Limpar marcadores antigos
                    val.forEach(org => {
                        const marker = L.marker([org.latitude, org.longitude]);
                        
                        // Adiciona o popup ao marcador
                        marker.bindPopup(`
                            <div class="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-4 rounded-lg max-w-sm shadow-lg">
                                <h3 class="text-lg font-bold mb-2">${org.nomeFantasia}</h3>
                                <p class="text-sm mb-2">
                                    <strong>Localização:</strong> Endereço: ${org.endereco}
                                </p>
                                <p class="text-sm leading-relaxed">
                                    Breve descrição: ${org.descricao}
                                </p>
                            </div>
                        `);

                        marker.addTo(this.map);
                        this.markers.push(marker); 
                    });
                }
            },
            immediate: true,
        },
    },
    methods: {
        MountMapByCoordinates() {
            const { longitude, latitude } = this.coordenates;

            if (!this.map) {
                this.map = L.map('map', {
                    center: [latitude, longitude],
                    zoom: 13,
                    zoomControl: false,
                });

                const map1 = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                });

                const hot = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
                    maxZoom: 19,
                    attribution:
                        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>',
                });

                map1.addTo(this.map);

                L.control.layers(
                    {
                        Osm: map1,
                    },
                    null,
                    { collapsed: false }
                ).addTo(this.map);

                this.marker = L.marker([latitude, longitude]);

               

                this.marker.addTo(this.map);

                setTimeout(() => {
                    this.map.invalidateSize();
                }, 100);
            }
        },

        // Limpar todos os marcadores no mapa
        clearMarkers() {
            this.markers.forEach(marker => marker.remove());
            this.markers = []; // Limpar a lista de marcadores
        }
    },
    mounted() {
        this.MountMapByCoordinates();
    },
};

export default HomeComponent;
