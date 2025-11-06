// Importa o método createRoot para renderizar a aplicação no DOM
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// Importa o BrowserRouter para habilitar rotas na aplicação
import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./context/StoreContext.jsx";

// Renderiza o aplicativo dentro da div #root no index.html
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* Provider do contexto global, disponibiliza dados e funções para toda a aplicação */}
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </BrowserRouter>
);
