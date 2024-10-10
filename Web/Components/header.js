
const HeaderComponent = {
  template: `
          
 <div className="flex justify-center items-center pt-6 w-full">
  <div className="flex justify-between  space-x-4 w-1/2">
    <form className=" pt-6 flex justify-between space-x-4 w-full">
      <input
        type="text"
        id="pesqui"
        name="fname"
        className="w-full border border-gray-300 rounded-lg p-2"
      />
      <label htmlFor="pesqui" className="pt-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
          <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
        </svg>

      </label>
    </form>
    <div className = "pt-3 absolute bottom-500 right-10 ">
      
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
          <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
        </svg>

      
    </div>
  </div>
</div>
       
       
    `,
};



export default HeaderComponent;
