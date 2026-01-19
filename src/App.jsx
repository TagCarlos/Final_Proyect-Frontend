import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import History from "./components/History";
import Brain from "./components/Brain";
import { /* BrowserRouter as Router, */ Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [isNavigating, setIsNavigating] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsNavigating(true);

    const timer = setTimeout(() => {
      setIsNavigating(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<History />} />
        <Route path="/brain" element={<Brain />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </div>
  );
}

/* <>
      <Header> </Header>
      <Routes>
        <Route path="/" element={<Header></Header>}>
          {" "}
        </Route>
        <Route path="/about" element={<History></History>}>
          {" "}
        </Route>
        <Route path="/shop" element={<Shop></Shop>}>
          {" "}
        </Route>
      </Routes>
      <Main></Main>
      <Footer></Footer>
      <History></History>
      <Shop></Shop>
    </> */

export default App;
