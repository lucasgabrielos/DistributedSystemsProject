const HomeComponent = {
    props: {
        coordenates: {
            type: Object,
            required: true,
        },
    },
    template: `
    <div class="relative h-screen w-screen">
      <div id="map" class="h-full w-full"></div>
    </div>
  `,
    data() {
        return {
            map: null,
            marker: null,
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
                        Humanitarian: hot,
                    },
                    null,
                    { collapsed: false }
                ).addTo(this.map);


                this.marker = L.marker([latitude, longitude]);


                this.marker.bindPopup(`
                    <div class="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-4 rounded-lg max-w-sm shadow-lg">
                        <h3 class="text-lg font-semibold">Localização da ONG</h3>
                        <p class="mt-2 text-sm leading-relaxed">
                            Aqui está a descrição da ONG. Informações adicionais podem ser adicionadas neste espaço.
                        </p>
                    </div>
                `, { autoClose: false });



                this.marker.on('click', () => {
                    this.marker.openPopup();
                });

                this.marker.addTo(this.map);

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
