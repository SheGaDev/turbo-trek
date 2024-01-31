import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import "./styles/globals.css";

const MainPage = lazy(() => import("./pages/Main"));
const CatalogPage = lazy(() => import("./pages/Catalog"));
const FavoritePage = lazy(() => import("./pages/Favorite"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<MainPage />}></Route>
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="favorites" element={<FavoritePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
