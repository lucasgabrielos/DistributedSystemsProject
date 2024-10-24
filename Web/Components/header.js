const HeaderComponent = {
  template: `
    <div className="flex justify-center items-center pt-6 w-full">
      <div className="flex flex-col lg:flex-row justify-between items-center w-full lg:w-1/2 space-y-4 lg:space-y-0 lg:space-x-4">

        
        <form className="w-full flex items-center space-x-4">
          <input 
            type="text" 
            id="pesqui" 
            name="fname" 
            className="w-full border border-gray-300 rounded-lg p-2" 
            placeholder="Pesquisar..." 
          />
          <button className="p-2 text-gray-700 hover:text-black">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
              <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
            </svg>
          </button>
        </form>

       
        <div className="flex items-center space-x-8 mr-8">
          
          <button className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
              <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
            </svg>
            <span className="text-sm mt-1">Login</span>
          </button>

          <button className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
              <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
            </svg>
            <span className="text-sm mt-1">Cadastro</span>
          </button>
        </div>

      </div>
    </div>
  `,
};

export default HeaderComponent;
