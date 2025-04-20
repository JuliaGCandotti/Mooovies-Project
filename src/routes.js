import FavoritesProvider from "./_utils/context/Favorites";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Player from "./pages/Player";
import OopsError from "./pages/OopsError";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <FavoritesProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/login" element={<Login />} />
          <Route path="/:id" element={<Player />} />
          <Route path="*" element={<OopsError />} />
        </Routes>
      </FavoritesProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
