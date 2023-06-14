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
  const [user_details, setuser_details] = useState(null);
  const get_user_details = async () => {
    if (authTokens) {
      let response = await fetch("http://127.0.0.1:8000/auth/users/me/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${authTokens?.access}`,
          Accept: "application/json",
        },
      });
      let user_details = await response.json();
      setuser_details(user_details);
      console.log(user_details);
    }
  };

  const navigate = useNavigate();
  const [loading, setloading] = useState(true);

  const loginUser = async (e) => {
    e.preventDefault();
    console.log("form submitted");
    try {
      let response = await fetch("http://127.0.0.1:8000/auth/jwt/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: e.target.username.value,
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
        if (response.status === 401) {
          alert("No account found!!!");
        }
      }
    } catch (error) {
      console.log(error);
    }
    // e.target.username.value = "";
    // e.target.password.value = "";
  };
  const signupUser = async (e) => {
    e.preventDefault();
    if (e.target.password.value !== e.target.re_password.value) {
      alert("Password does not match");
      e.target.password.value = "";
      e.target.re_password.value = "";
      return;
    }

    console.log("signup");
    try {
      let response = await fetch("http://127.0.0.1:8000/auth/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          password: e.target.password.value,
          re_password: e.target.re_password.value,
        }),
      });
      let data = await response.json();
      console.log(data);

      // alert(data);
      return response.status;
    } catch (error) {
      console.log("this is error", error);
      alert(error);
    }
  };

  const Send_reset_password_link = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        "http://127.0.0.1:8000/auth/users/reset_password/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: e.target.email.value,
          }),
        }
      );
      let data = await response.json();
      if (response.status === 200) {
        return <p>Check your email account to reset password !!!</p>;
      }
    } catch (error) {
      alert(error);
    }
  };

  const verify_user = async (uid, token) => {
    console.log("this is uid", uid, token);
    console.log(JSON.stringify({ uid: uid, token: token }));
    let response = await fetch("http://127.0.0.1:8000/auth/users/activation/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uid: uid, token: token }),
    });
    // let data = await response.json();
    console.log("verify user", response);
    return response.status;
  };
  const logoutUser = () => {
    setauthTokens(null);
    setuser(null);
    localStorage.removeItem("authTokens");
    navigate("/");
  };
  const updateToken = async () => {
    if (authTokens) {
      let response = await fetch("http://127.0.0.1:8000/auth/jwt/refresh", {
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
    user_details: user_details,
    loginUser: loginUser,
    logoutUser: logoutUser,
    signupUser: signupUser,
    Send_reset_password_link: Send_reset_password_link,
    verify_user: verify_user,
  };

  useEffect(() => {
    get_user_details();

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
