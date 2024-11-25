const HeaderComponent = {
  data() {
    return {
      Search: '',
      Coordinates: {}
    };
  },
  template: `
  <div class="w-full shadow-md bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 ">
    <div class="flex flex-col items-center lg:flex-row lg:justify-between p-4 lg:p-6">
      <!-- Barra de Pesquisa -->
      <form class="w-full flex justify-center items-center space-x-2 mb-4 lg:mb-0">
        <input
          v-model="Search"
          type="text" 
          id="pesqui" 
          name="fname" 
          class="w-[60%] border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400" 
          placeholder="Pesquisar..." 
        />
        <button type="button" @click="SendRequestSearchLocation" class="p-2 hover:text-black focus:outline-none">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACcklEQVR4nO2YvWsUQRjGR0UTNVoZhLNQETEQFUkRYmOVIoJNUAsloNilUa9ME6widjH/QEAR4kewTSXYaOlnlFioiHZpTGMEz5+8ZAbejJNk3czc7cb9lXe7z/O8s+/evHPGVFRUVGwIgD3AUeAksB9oM0UG2A5cAO4D3wnzArgBdJuiAGwGzgMfyc5v4AFwqAht8nSFkPPAG+AZ8Bn4GbjmBzDUqvBdgVX/CozId4HrdwCDwLR9ApqxZofv9ML/AkYlZMb7e4GXXhH19MmXzLd4bSMv7EAOnQ7gsbcI/WlSLze+4pmeWYfWVuCJ0puTz+Im/vun8osyHI3UjvLCO4bjpA2bXVRG37L2fAbdutJ9F0NzJaMpZTQSUbcdWFDaR2Jpa5NN3g7bFVlfNjbH9ZjaetNyzCfQv6r0J0wCg+PK4FUC/XNK/6FJYNCnDJ4n0B9Q+jMmgcEBZfAp8f5yxyQwaFMzjAxmOyPrj6kCbsXU1iYyzzsGI2vL5OrIvbuvZSKHEcd0RN0TSncR2B1L2zfqBhrWSNqpN5LujCpgMobmamb3lJmMxB3r1Luk9BrAsXhpw4YH7UnKISPxtpxap2zLOMbjJw4bD7EcOR905lj5RW/1D6dLvfrPHnYklqmyPcMLq3se7zxQa2YRdXuo0SzYwewacBY4DVwGbgKvA6EbrS6i35r+KxJ8XNomcP9cs4uQo+Ew8D5DcOn7SRkO1f21lhfhkMOIzPPAbeCR7fe7Mh7IDgvsMgEKVURegL3ArFfEB2CfKQtURRQENsiTqAVe7Nm1NssyFNFjygRLRbh2eluqJ+D9+dVTyvAVFRX/EX8A48icFFuHP90AAAAASUVORK5CYII=" alt="search">
        </button>
      </form>

      
      <div class="flex justify-center space-x-4">
        
        <a href="#/login" class="flex flex-col items-center">
          <button class="flex flex-col items-center focus:outline-none pt-1">
            <img width="48" height="48" src="https://img.icons8.com/sf-regular/48/FFFFFF/login-rounded-right.png" alt="login-rounded-right"/>
            <span class="text-xs lg:text-sm mt-1 text-white pt-1">Login</span>
          </button>
        </a>

        
        <a href="#/pagcad" class="flex flex-col items-center">
          <button class="flex flex-col items-center focus:outline-none">
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACtklEQVR4nO2ZO2gUQRjHxzeKMQ+jWKggYqEpRAs7QckRJCiS00IUwSeIgmKsAoKCkMpHIcQYRA2+wMrOwkYUDBYGRRvxFS0FFSx8BPQnH/kWPse9vWP33Iy4PxjYvf3vzH/mvplv5s65goKCgoLQABqALuCwFrlucKEDNAKngK/8iXx2EpjlQgRYADyjOk+B+S4kgBnAY8/oI+C0lmHvmdxPd6EAHPNCZVuMZjvwzeiOuhAApgKfjLE9Cdp9RvcRmJKv23hT7cbUS2BignYS8Mro1+brNt7UAWOovwb9eaPfn4/LZEM9xlBvDfpeo+/Jx2Wyob3G0NUa9NeNfnc+LpMNrTCGPgAzq2RombwRy/N1G29qAvDCmDqboO0zuufyrgsBWff5nQtAq3k+B7joaba4kPBiWxjVjDus15YrLjQYS2iDVOeSaF2oAOuB+8APY1qu7wGd7l8BaAFWamkZbz//D4wdalYDG4EdwFZgA9AGTHYhAqwCzuja/jNhAst2+g5wCJgdgvES8JB0jMgpbjzD5EYFY6N6GrulS+ZNXYHEcMRdL9E1A5uBbv0RQK6b/pb5xcBrz/R34DKwDpiW8O4SYGd0nATmAgMxiS4aiH7J4vU0vwh45zV0DViYoi6Z1G9rDLW2emVaCQ179k21n9GRjzP/ABiq0Ils3wRwwltNShnqkrCJo907olrOZTEvk+yzqexgxrriYl5YoyUOmWeNaRuV1SHiSZZ9vK4wpOiAUE7b6GC9zrHAES/mOzSflPTbaTb3HaqJ6E7b6HGy05myA0P16MA84H3GDuzSujZlCKGuVB3QhpcCt4EvKTswoPU05T6J641m2DiSltE+Fwp6yLd7o4ihConsjd07BYFuJUYqjLZvfpkLEaBVMqzGd1zM9wU38gnb87L5T60czIQtKHBh8wsyGqZUWGDhWQAAAABJRU5ErkJggg==" alt="add-user-male">          
          <span class="text-xs lg:text-sm mt-1 text-white">Cadastro</span>
          </button>
        </a>
      </div>
    </div>
  </div>

  
  `,
  methods: {
    SendRequestSearchLocation() {
      axios.get('https://localhost:7198/api/Location/geocode?', {
        params: {
          address: this.Search
        }
      }).then(response => {
        const coordinates = response.data;
        this.$emit('update-map-by-coordinates', coordinates);
      }).catch(error => {
        console.error('Erro ao buscar localização:', error);
      });
    }
  }
};

export default HeaderComponent;
