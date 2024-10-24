import Header from './header.js';

const HomeComponent = {
  template: `
 <div>
  <Header /> 

  <div class="flex justify-center items-center h-screen">
    <div class="rounded-lg h-[500px] w-[200%] lg:w-[80%] shadow-lg">
      <iframe 
        width="100%" 
        height="100%" 
        style="border:none;" 
        loading="lazy"
        allowfullscreen 
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.845566945619!2d-34.904949224234315!3d-8.11720209191211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1fadcaa54637%3A0xbdb1a1182c056086!2sR.%20Padre%20Carapuceiro%2C%20733%20-%20Sala%201001%20-%20Boa%20Viagem%2C%20Recife%20-%20PE%2C%2051020-280!5e0!3m2!1spt-BR!2sbr!4v1722870633793!5m2!1spt-BR!2sbr">
      </iframe>
    </div>
  </div>
</div>

  `,
};

export default HomeComponent;
