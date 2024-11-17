const HeaderComponent = {
    data() {
        return {
            Search: '',
            Coordinates: {}
        }
    },
  template: `
    <div class="  w-full shadow-md">
      <div class="flex flex-col items-center lg:flex-row lg:justify-center p-6 lg:p-4">
        <form class="w-full flex items-center space-x-2">
          <input
            v-model="Search"
            type="text" 
            id="pesqui" 
            name="fname" 
            class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" 
            placeholder="Pesquisar..." 
          />
          <a @click="SendRequestSearchLocation()" class="p-2 hover:text-black focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
              <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
            </svg>
          </a>
        </form>

        <div class="flex items-center space-x-6 lg:space-x-8">
          <button class="flex flex-col items-center focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
              <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
            </svg>
            <span class="text-sm mt-1">Login</span>
          </button>

          <button class="flex flex-col items-center focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
              <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
            </svg>
            <span class="text-sm mt-1">Cadastro</span>
          </button>
        </div>
      </div>
    </div>
  `,
    methods: {
        async SendRequestSearchLocation() {
            const response = await axios.get('https://localhost:7198/api/Location/geocode?', {
                params: {
                    address: this.Search
                }
            });

            if (response.status == 200) {
                const coordenates = response.data;
                console.log(coordenates);
                this.$emit('update-map-by-coordinates', coordenates.longitude, coordenates.latitude)
            } else {
            }
        }
    }
};

export default HeaderComponent;
