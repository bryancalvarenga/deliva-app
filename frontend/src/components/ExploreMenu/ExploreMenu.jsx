import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      
      {/* Título da seção */}
      <h1>Explore our menu</h1>

      {/* Texto explicativo abaixo do título */}
      <p className='explore-menu-text'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, 
        libero ipsam quae recusandae rem eveniet soluta repellat accusantium 
        eius delectus deleniti ab magni ea, quia voluptate velit corporis, alias dolorum?
      </p>

      {/* Lista de categorias */}
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div 
              key={index} 
              className='explore-menu-list-item'
              
              /* 
                Se o usuário clicar na categoria que já está selecionada,
                volta para "All" (exibe tudo). Caso contrário, troca para a nova categoria.
              */
              onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
            >
              
              {/* Imagem da categoria */}
              <img 
                className={category === item.menu_name ? "active" : ""} 
                src={item.menu_image} 
                alt={`Categoria ${item.menu_name}`} // ALT DESCRITIVO ✅
              />

              {/* Nome da categoria */}
              <p>{item.menu_name}</p>

            </div>
          );
        })}
      </div>

      {/* Linha divisória */}
      <hr />
    </div>
  );
};

export default ExploreMenu;
