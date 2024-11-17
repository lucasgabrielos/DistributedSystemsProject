const HomeComponent = {
    template: `
    <div class="relative h-screen w-screen">
      <div id="map" class="h-full w-full"></div>
    </div>
  `,

    methods: {
        MountMapByCoordinates(longitude, latitude) {
            console.log(longitude);
            if (longitude == null) {
                longitude = -8.117202;
                latitude = -34.904949;
            }
            const map = L.map('map', {
                center: [longitude, latitude],
                zoom: 13,
                zoomControl: false,
            });


            var map1 = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            });

            map1.addTo(map);

            var hot = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
            });


            const singleMarker = L.marker([longitude, latitude]);

            var baseMaps = {
                "Osm": map1,
                "Humanitarian": hot
            };

            var overlayMaps = {
                "Marker": singleMarker
            };

            L.control.layers(baseMaps, overlayMaps, { collapsed: false }).addTo(map);

            singleMarker.addTo(map);


            setTimeout(() => {
                map.invalidateSize();
            }, 100);
        }
    },
    mounted() {
        this.MountMapByCoordinates();
    },
};

export default HomeComponent;
