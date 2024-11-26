const CadcpjComponent = {
    template: `
      <body class="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 min-h-screen flex items-center justify-center">
  
        <div class="w-full max-w-3xl p-8 md:p-12 bg-white/10 backdrop-blur-md shadow-2xl rounded-lg border border-gray-700">
            <div class="mb-8 text-center">
                <h1 class="text-4xl font-extrabold text-green-400">Cadastro de Centro de Recolhimento</h1>
                <p class="text-sm text-gray-300 mt-2">Preencha as informações abaixo para registrar o centro.</p>
            </div>
  
            <form id="cadastroCentroForm" class="space-y-6">
  
                <!-- Campo de CNPJ -->
                <div>
                    <input type="text" name="cnpj" placeholder="CNPJ" required
                        class="w-full px-4 py-3 bg-white/20 border border-green-300 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all">
                </div>
  
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input type="text" name="nome_empresarial" placeholder="Nome Empresarial" required
                        class="w-full px-4 py-3 bg-white/20 border border-green-300 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all">
                    <input type="text" name="nome_fantasia" placeholder="Nome Fantasia" required
                        class="w-full px-4 py-3 bg-white/20 border border-green-300 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all">
                </div>
  
                <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <input type="text" name="ddd" placeholder="DDD" required
                        class="px-4 py-3 bg-white/20 border border-green-300 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-300 transition-all">
                    <input type="text" name="numero" placeholder="Número" required
                        class="md:col-span-3 px-4 py-3 bg-white/20 border border-green-300 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-300 transition-all">
                </div>
  
                <input type="email" name="email" placeholder="E-mail" required
                    class="w-full px-4 py-3 bg-white/20 border border-green-300 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-300 transition-all">
  
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <input type="text" name="cep" placeholder="CEP" required
                        class="md:col-span-2 px-4 py-3 bg-white/20 border border-green-300 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-300 transition-all">
                    <input type="text" name="uf" placeholder="UF" required
                        class="px-4 py-3 bg-white/20 border border-green-300 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-300 transition-all">
                </div>
  
                <div class="space-y-4">
                    <input type="text" name="endereco" placeholder="Endereço" required
                        class="w-full px-3 py-2 bg-white/20 border border-green-300 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-300 transition-all">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <input type="text" name="numero_endereco" placeholder="Número" required
                            class="px-3 py-2 bg-white/20 border border-green-300 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-300 transition-all">
                        <input type="text" name="complemento" placeholder="Complemento"
                            class="md:col-span-3 px-3 py-2 bg-white/20 border border-green-300 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-300 transition-all">
                    </div>
                </div>
  
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input type="password" name="senha" placeholder="Senha" required
                        class="w-full px-4 py-3 bg-white/20 border border-green-300 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-300 transition-all">
                    <input type="password" name="confirmar_senha" placeholder="Confirme a Senha" required
                        class="w-full px-4 py-3 bg-white/20 border border-green-300 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-300 transition-all">
                </div>
  
                <!-- Textarea de descrição -->
                <div>
                    <textarea name="descricao" rows="4" placeholder="Descrição do Centro de Recolhimento" required
                        class="w-full px-4 py-3 bg-white/20 border border-green-300 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"></textarea>
                </div>
  
                <div class="flex justify-center">
                    <button type="submit"
                        class="w-full md:w-auto px-8 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-400 transition-all">
                        Cadastrar
                    </button>
                </div>
            </form>
        </div>
  
      </body>
    `,
  };
  
  export default CadcpjComponent;
