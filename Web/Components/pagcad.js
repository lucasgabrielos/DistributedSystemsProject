const PagcadComponent = {
    template: `
     <body class="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 min-h-screen flex items-center justify-center">
    
    
    <div class="w-full max-w-md p-8 md:p-12 bg-white/10 backdrop-blur-lg shadow-2xl rounded-xl border border-gray-700 text-center">
        
        
        <h2 class="text-3xl font-extrabold text-green-400 mb-6">Escolha o tipo de cadastro</h2>
        
        <p class="text-sm text-gray-300 mb-8">Por favor, selecione uma das opções abaixo para prosseguir com o cadastro.</p>

        
        <div class="flex flex-col space-y-6">
            
            <a href="#/cadcpf" class="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all focus:outline-none focus:ring-4 focus:ring-green-400">
                Usuário
            </a>

          
            <a href="#/cadpj" class="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all focus:outline-none focus:ring-4 focus:ring-green-400">
                Posto de Recolhimento
            </a>
        </div>
    </div>
    

</body>

    `,
  };
  
  export default PagcadComponent;