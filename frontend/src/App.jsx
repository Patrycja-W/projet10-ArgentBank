import { Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Footer from "./composants/Footer";
import Header from "./composants/Header";
import { ProtectedRoute } from "./composants/ProtectedRoute";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />

        {/* Protégez la route du profil avec le composant ProtectedRoute */}

        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
