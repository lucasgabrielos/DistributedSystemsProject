const PagcnpjComponent = {
  data() {
    return {
        organization: {
            Id: '',
            NomeDaOrganizacao: '',
            NomeFantasia: '',
            Endereco: '',
            CEP: '',
            Longitude: '', 
            Latitude: '',  
            Senha: '',
            Email: '',
            Descricao: '',
        },
    };
},
  methods: {
    saveChanges() {
      let formData = new FormData();
      formData.append("OrganizationObject", JSON.stringify(this.organization));

      axios.post(`https://localhost:7198/api/Organization/UpdateOrganization`, formData).then((response) => {
          console.log('Alterações salvas com sucesso:', response.data);
          alert('Alterações salvas com sucesso!');
          this.$router.push('/');
        })
        .catch((error) => {
          console.error('Erro ao salvar alterações:', error);
          alert('Erro ao salvar alterações. Confira os dados e tente novamente.');
        });
    },
  },
  template: `
  <body class="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen flex items-center justify-center px-4">
    <div class="w-full max-w-5xl p-12 bg-white/10 backdrop-blur-md shadow-lg rounded-lg border border-gray-700">
      <div class="mb-10 text-center">
        <h1 class="text-5xl font-extrabold text-green-400">Editar Centro de Recolhimento</h1>
        <p class="text-lg text-gray-300 mt-4">Atualize as informações do centro abaixo de maneira simples e rápida.</p>
      </div>

      <form class="space-y-8" @submit.prevent="saveChanges">
        <div class="grid grid-cols-1 gap-6">
          <div>
            <label class="block text-gray-300 text-sm font-semibold mb-2">Nome Empresarial</label>
            <input type="text" v-model="organization.NomeDaOrganizacao" placeholder="ONG Exemplo"
              class="w-full px-4 py-3 bg-white/20 border border-green-300 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all">
          </div>

          <div>
            <label class="block text-gray-300 text-sm font-semibold mb-2">Nome Fantasia</label>
            <input type="text" v-model="organization.NomeFantasia" placeholder="Fantasia Exemplo"
              class="w-full px-4 py-3 bg-white/20 border border-green-300 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all">
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-gray-300 text-sm font-semibold mb-2">CEP</label>
            <input type="text" v-model="organization.CEP" placeholder="12345-678"
              class="w-full px-4 py-3 bg-white/20 border border-green-300 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all">
          </div>

          <div>
            <label class="block text-gray-300 text-sm font-semibold mb-2">Endereço</label>
            <input type="text" v-model="organization.Endereco" placeholder="Rua Exemplo, 123, Bairro Exemplo"
              class="w-full px-4 py-3 bg-white/20 border border-green-300 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all">
          </div>
        </div>

        <div>
          <label class="block text-gray-300 text-sm font-semibold mb-2">E-mail</label>
          <input type="email" v-model="organization.Email" placeholder="contato@ongexemplo.org"
            class="w-full px-4 py-3 bg-white/20 border border-green-300 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-300 transition-all">
        </div>

        <div>
          <label class="block text-gray-300 text-sm font-semibold mb-2">Descrição</label>
          <textarea rows="4" v-model="organization.Descricao" placeholder="Descrição inicial do centro de recolhimento."
            class="w-full px-4 py-3 bg-white/20 border border-green-300 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"></textarea>
        </div>

        <div class="flex justify-center mt-8">
          <button type="submit"
            class="w-full md:w-1/3 px-8 py-3 bg-gradient-to-r from-green-400 to-green-600 text-white font-bold text-lg rounded-lg hover:from-green-500 hover:to-green-700 focus:outline-none focus:ring-4 focus:ring-green-400 transition-all">
            Salvar Alterações
          </button>
        </div>
      </form>
    </div>
  </body>
  `,
    mounted() {
      if(CurrentCustomer != null && Object.keys(CurrentCustomer).length > 0){
          this.organization.Id = CurrentCustomer.id;
          this.organization.NomeDaOrganizacao = CurrentCustomer.nomeDaOrganizacao;
          this.organization.NomeFantasia = CurrentCustomer.nomeFantasia;
          this.organization.Endereco = CurrentCustomer.endereco;
          this.organization.CEP = CurrentCustomer.cep;
          this.organization.Longitude = CurrentCustomer.longitude;
          this.organization.Latitude = CurrentCustomer.latitude;
          this.organization.Senha = CurrentCustomer.senha;
          this.organization.Email = CurrentCustomer.email;
          this.organization.Descricao = CurrentCustomer.descricao;
      }
    }
};

export default PagcnpjComponent;