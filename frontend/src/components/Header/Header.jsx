import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      
      {/* Conteúdo central do banner principal */}
      <div className="header-contents">

        {/* Título principal que chama o usuário para ação */}
        <h2>Order your favorite food here</h2>

        {/* Texto de apoio / descrição da proposta do app */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Velit rem adipisci veritatis quis sint inventore! Tempore 
          nobis quidem, autem perferendis nesciunt omnis magni quam 
          temporibus debitis quae ut fugiat fuga.
        </p>

        {/* Botão que normalmente leva o usuário ao menu */}
        <button>View Menu</button>

      </div>
    </div>
  );
};

export default Header;
