import Home from './home.js';
import Header from './header.js';

const BodyComponent = {
    components: {
        HeaderComponent: Header, 
        HomeComponent: Home      
    },
    template:`
      <div class="bg-green-300 w-full min-h-screen">
        <HeaderComponent />
        <HomeComponent />
      </div>
    `,
};

export default BodyComponent; 
