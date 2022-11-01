import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  let [authTokens, setauthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  const [user, setuser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens"))
      : null
  );
  const navigate = useNavigate();
  const [loading, setloading] = useState(true);

  const loginUser = async (e) => {
    e.preventDefault();
    console.log("form submitted");
    let response = await fetch("http://127.0.0.1:8000/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });
    let data = await response.json();
    if (response.status === 200) {
      setauthTokens(data);
      setuser(jwt_decode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      navigate("/");
    } else {
      alert("Something went wrong!!!");
    }
    // e.target.username.value = "";
    // e.target.password.value = "";
  };

  const logoutUser = () => {
    setauthTokens(null);
    setuser(null);
    localStorage.removeItem("authTokens");
    navigate("/");
  };
  const updateToken = async () => {
    if (authTokens) {
      let response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          refresh: authTokens?.refresh,
        }),
      });
      let data = await response.json();

      if (response.status === 200) {
        setauthTokens(data);
        setuser(jwt_decode(data.access));
        localStorage.setItem("authTokens", JSON.stringify(data));
      } else {
        logoutUser();
      }
    }
    if (loading) {
      setloading(false);
    }
  };
  let contextData = {
    user: user,
    loginUser: loginUser,
    logoutUser: logoutUser,
  };

  useEffect(() => {
    if (loading) {
      updateToken();
    }
    let tenmin = 1000 * 60 * 10;
    let interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, tenmin);
    return () => clearInterval(interval);
  }, [authTokens, loading]);

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
