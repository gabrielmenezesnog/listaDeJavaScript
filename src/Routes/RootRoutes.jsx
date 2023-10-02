import { BrowserRouter, Routes, Route } from "react-router-dom";

// Navegações
import Homepage from "../Pages/Homepage/Homepage";
import Exercicio1 from "../Pages/Exercicio1/Exercicio1";
import Exercicio2 from "../Pages/Exercicio2/Exercicio2";
import Exercicio3 from "../Pages/Exercicio3/Exercicio3";
import Exercicio4 from "../Pages/Exercicio4/Exercicio4";
import Exercicio5 from "../Pages/Exercicio5/Exercicio5";
import Exercicio6 from "../Pages/Exercicio6/Exercicio6";
import Exercicio7 from "../Pages/Exercicio7/Exercicio7";
import Exercicio8 from "../Pages/Exercicio8/Exercicio8";

function RootRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="exercicio1" element={<Exercicio1 />} />
        <Route path="exercicio2" element={<Exercicio2 />} />
        <Route path="exercicio3" element={<Exercicio3 />} />
        <Route path="exercicio4" element={<Exercicio4 />} />
        <Route path="exercicio5" element={<Exercicio5 />} />
        <Route path="exercicio6" element={<Exercicio6 />} />
        <Route path="exercicio7" element={<Exercicio7 />} />
        <Route path="exercicio8" element={<Exercicio8 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RootRoutes;
