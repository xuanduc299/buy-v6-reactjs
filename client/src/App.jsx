import "./app.scss";
import Home from "./pages/Home";
// import Post from "./pages/Post";
import Login from "./pages/Login";
import Originals from "./pages/Originals";
import Adistar from "./pages/Adistar";
import AdidasKarlie from "./pages/AdidasKarlie";
import Header from "./components/Header";
import Payment from "./components/Payment";
import Products from "./components/Products";
import Vi from "./components/Vi";
import Vi_Shirt from "./components/Vi_Shirt";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import DetailUser from "./components/DetailUser";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { DataProvider } from "./components/DataProvider";
import SearchForm from "./components/SearchForm";
import Search from "./pages/Search";
import Filter from "./pages/Filter";


const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  return (
    <DataProvider>
      <Router>
        <div>
          <Header user={user} />
          <Routes>
            {/* <DetailUser user={user} path="/my-account" /> */}
            <Route path="/" element={<Home />} />
            <Route path="/products/" element={<Products />} />
            <Route path="/vi/originals" element={<Originals />} />
            <Route path="/vi/adistar" element={<Adistar />} />
            <Route path="/vi/adidaskarlie" element={<AdidasKarlie />} />
            <Route path="/vi/search/giay" element={<Vi />} />
            <Route path="/vi/search/ao" element={<Vi_Shirt />} />
            <Route path="/products/:id" element={<Details />} />
            <Route path="/payment/:id" element={<Payment />} />
            <Route path="/search/:value" element={<Search />} />
            <Route path="/cart" element={<Cart />} />
            {/* <Route path='/filter/:option/:value' element={<Filter />} /> */}

            <Route
              path="/login"
              element={user ? <Navigate to="/" /> : <Login />}
            />
            <Route
              path="/my-account" user={user} element={<DetailUser />}
            />

            {/* <Route
              path="/post/:id"
              element={user ? <Post /> : <Navigate to="/login" />}
            /> */}
          </Routes>
        </div>
      </Router>
      <Footer />
    </DataProvider>
  );
};

export default App;
