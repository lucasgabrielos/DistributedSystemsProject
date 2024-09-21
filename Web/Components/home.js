import Header from './header.js'

const HomeComponent = {
    components: {
        HeaderComponent: Header
    },
    template: `
      <div>
        <HeaderComponent />
        <h1>Bem-vindo ao componente Home</h1>
      </div>
    `,
};

export default HomeComponent;
