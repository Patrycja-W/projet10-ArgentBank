import { Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import SignIn from "./pages/SignIn";
import ProfileUser from "./pages/Profile";
import Footer from "./composants/Footer";
import Header from "./composants/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/user" element={<ProfileUser />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
