import logo from "./logo.svg";
import "./App.css";
import { Navbar_component } from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Productpage from "./Pages/Productpage";
import Signup_page from "./Pages/Signup_page";
import Aboutus from "./Pages/Aboutus";
import Checkout from "./Pages/Checkout";
import Testpage from "./Pages/Testpage";

import Testpage2 from "./Pages/Testpage2";
import Payment from "./Pages/Payment";
import ProtectedRoutes, { Check_Signup } from "./Components/ProtectedRoutes";
import { AuthProvider } from "./AuthContext";
import Activate_account_component from "./Components/Activate_account_component";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navbar_component />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/product" element={<Productpage />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/checkout" element={<Checkout />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/payment" element={<Payment />} />
          </Route>
          <Route element={<Check_Signup />}>
            <Route path="/signup" element={<Signup_page />} />
            <Route path="/login" element={<Signup_page />} />
          </Route>
          <Route path="/send_reset_password_link" element={<Signup_page />} />
          <Route path="/test" element={<Testpage />} />
          <Route path="/activate/:uid/:token" element={<Signup_page />} />

          {/* <Route path="/test2" element={<Testpage2 />} /> */}
        </Routes>
      </AuthProvider>
    </div>
  );
}
// const default_container = () => (
//   <div className="container">
//           <Route path="/signup" element={<Signup_page />} />

//   </div>
// );
export default App;
