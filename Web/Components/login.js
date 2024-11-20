import Header from './header.js';

const LoginComponent = {
  template: `
   <body class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen flex items-center justify-center">

    <div class="w-full max-w-md p-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20">
        
        <h2 class="text-3xl font-extrabold text-center text-green-400 mb-8">Login</h2>

        <form action="#" class="space-y-6">
            
            <div>
                <label for="email" class="block text-sm font-medium text-green-300">Email</label>
                <input type="email" id="email" placeholder="Digite seu email"
                    class="w-full mt-2 px-4 py-3 bg-white/20 border border-green-300 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-green-200">
            </div>

            
            <div>
                <label for="password" class="block text-sm font-medium text-green-300">Senha</label>
                <input type="password" id="password" placeholder="Digite sua senha"
                    class="w-full mt-2 px-4 py-3 bg-white/20 border border-green-300 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-green-200">
            </div>

            
            <div class="flex items-center justify-between">
                <label class="inline-flex items-center text-green-300">
                    <input type="checkbox" class="h-5 w-5 text-green-500 rounded focus:ring-0">
                    <span class="ml-2 text-sm">Lembrar-me</span>
                </label>
                <a href="#" class="text-sm text-green-400 hover:underline">Esqueceu a senha?</a>
            </div>

            
            <button type="submit"
                class="w-full py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 transition-all">
                Entrar
            </button>
        </form>

        
    
    </div>

</body>
  `,

};

export default LoginComponent;
