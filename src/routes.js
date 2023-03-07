import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './paginas/Inicio'
import About from './paginas/About'
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaDefault from "componentes/PaginaDefault";
import Post from './paginas/Post'
import NotFound from "paginas/NotFound";
import ScrollToTop from "componentes/ScrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />

      <Routes>

        <Route path="/" element={<PaginaDefault />}> 

          <Route index element={<Inicio />} />
          
          <Route path="about" element={<About />} />

        </Route>

        <Route path="posts/:id/*" element={<Post/>} />

        <Route path="*" element={<NotFound />}/>

      </Routes>

      <Rodape />

    </BrowserRouter>
  );
}

export default AppRoutes;
