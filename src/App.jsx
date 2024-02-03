import "./styles";
import { Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";
import Layout from "./components/layout/Layout";

const MainPage = lazy(() => import("./pages/Main"));
const CatalogPage = lazy(() => import("./pages/Catalog"));
const FavoritePage = lazy(() => import("./pages/Favorite"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="favorites" element={<FavoritePage />} />
      </Route>
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
}

export default App;
