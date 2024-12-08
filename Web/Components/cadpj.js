const CadcpjComponent = {
    data() {
        return {
            organization: {
                NomeDaOrganizacao: '',
                NomeFantasia: '',
                Endereco: '',
                CEP: '',
                Longitude: '', // Se necessário
                Latitude: '',  // Se necessário
                Senha: '',
                Email: '',
                Descricao: '',
            },
        };
    },
    template: `
    <body class="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 min-h-screen flex items-center justify-center">

      <div class="w-full max-w-3xl p-8 md:p-12 bg-white/10 backdrop-blur-md shadow-2xl rounded-lg border border-gray-700">
        <div class="mb-8 text-center">
          <h1 class="text-4xl font-extrabold text-green-400">Cadastro de Centro de Recolhimento</h1>
          <p class="text-sm text-gray-300 mt-2">Preencha as informações abaixo para registrar o centro.</p>
        </div>

        <form id="cadastroCentroForm" class="space-y-6">

          <!-- Campo de Nome da Organização -->
          <div>
            <input type="text" v-model="organization.NomeDaOrganizacao" placeholder="Nome Empresarial" required
              class="w-full px-4 py-3 bg-white/20 border border-green-300 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all">
          </div>

          <!-- Campo de Nome Fantasia -->
          <div>
            <input type="text" v-model="organization.NomeFantasia" placeholder="Nome Fantasia" required
              class="w-full px-4 py-3 bg-white/20 border border-green-300 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all">
          </div>

          <!-- Campo de CEP -->
          <div>
            <input type="text" v-model="organization.CEP" placeholder="CEP" required
              class="w-full px-4 py-3 bg-white/20 border border-green-300 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all">
          </div>

          <!-- Campo de Endereço -->
          <div>
            <input type="text" v-model="organization.Endereco" placeholder="Endereço" required
              class="w-full px-4 py-3 bg-white/20 border border-green-300 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all">
          </div>

          <!-- Campo de Email -->
          <div>
            <input type="email" v-model="organization.Email" placeholder="E-mail" required
              class="w-full px-4 py-3 bg-white/20 border border-green-300 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-300 transition-all">
          </div>

          <!-- Campos de Senha -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="password" v-model="organization.Senha" placeholder="Senha" required
              class="w-full px-4 py-3 bg-white/20 border border-green-300 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-300 transition-all">
            <input type="password" placeholder="Confirme a Senha" required
              class="w-full px-4 py-3 bg-white/20 border border-green-300 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-300 transition-all">
          </div>

          <!-- Textarea de Descrição -->
          <div>
            <textarea v-model="organization.Descricao" rows="4" placeholder="Descrição do Centro de Recolhimento" required
              class="w-full px-4 py-3 bg-white/20 border border-green-300 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"></textarea>
          </div>

          <div class="flex justify-center">
            <a type="button" @click="CreateNewOrganization()"
              class="w-full md:w-auto px-8 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-400 transition-all">
              Cadastrar
            </a>
          </div>
        </form>
      </div>

    </body>
  `,
    methods: {
        CreateNewOrganization() {
            let formData = new FormData();
            formData.append("OrganizationObject", JSON.stringify(this.organization));

            axios.post('https://localhost:7198/api/Organization/CreateOrganization', formData).then(response => {
                console.log(response);
            }).catch(error => {
                console.error('Erro ao buscar localização:', error);
            });
        }
    }
};

export default CadcpjComponent;
