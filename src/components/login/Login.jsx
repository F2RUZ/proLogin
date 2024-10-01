import React from "react";
import "./login.scss"; // SCSS faylni alohida yozib olinadi
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaYandex } from "react-icons/fa"; // Yandex ikonkasi
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import logo from "../../assets/img/DA-logo-White.png";

const SignupForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logikasi bu yerda bo'ladi
    console.log("Form Submitted");
  };

  // Google Login
  const googleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => handleGoogleLoginSuccess(tokenResponse),
    onError: () => handleGoogleLoginError(),
  });

  const handleGoogleLoginSuccess = (tokenResponse) => {
    console.log("Google Login Success:", tokenResponse);
    // Tokenni backend-ga yuborish yoki foydalanuvchini autentifikatsiya qilish logikasi
  };

  const handleGoogleLoginError = () => {
    console.error("Google Login Failed");
  };

  // GitHub Login
  const handleGithubLogin = () => {
    // GitHub OAuth URL ga yo'naltirish
    const clientId = "YOUR_GITHUB_CLIENT_ID";
    const redirectUri = "http://localhost:3000";
    const scope = "read:user user:email";
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;
  };

  // Yandex Login
  const handleYandexLogin = () => {
    const clientId = "YOUR_YANDEX_CLIENT_ID";
    const redirectUri = "http://localhost:3000"; // Redirect URL
    const scope = "login:info login:email";
    window.location.href = `https://oauth.yandex.com/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;
  };

  // OAuth callbackni boshqarish
  React.useEffect(() => {
    const url = window.location.href;
    const hasCode = url.includes("?code=");

    if (hasCode) {
      const newUrl = url.split("?code=");
      window.history.pushState({}, null, newUrl[0]);
      const code = newUrl[1];

      // Backend-ga kodni yuborish va access token olish (GitHub)
      axios
        .post("http://localhost:4000/auth/github", { code })
        .then((response) => {
          console.log("GitHub Access Token:", response.data.access_token);
          // Access token bilan foydalanuvchini autentifikatsiya qilish logikasi
        })
        .catch((error) => {
          console.error("GitHub OAuth Error:", error);
        });

      // Backend-ga kodni yuborish va access token olish (Yandex)
      axios
        .post("http://localhost:4000/auth/yandex", { code })
        .then((response) => {
          console.log("Yandex Access Token:", response.data.access_token);
          // Access token bilan foydalanuvchini autentifikatsiya qilish logikasi
        })
        .catch((error) => {
          console.error("Yandex OAuth Error:", error);
        });
    }
  }, []);

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="form-wrapper">
        <img className="logo" src={logo} alt="" />
        <div className="signup-form">
          <form onSubmit={handleSubmit}>
            <h2 className="form-title">Login</h2>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button className="submit" type="submit">
              Login
            </button>
            <hr className="hr" />
            <button
              type="button"
              className="google-btn"
              onClick={() => googleLogin()}
            >
              <FcGoogle size={"20px"} />
              Login with Google
            </button>
            <button
              type="button"
              className="github-btn"
              onClick={handleGithubLogin}
            >
              <FaGithub size={"20px"} />
              Login with GitHub
            </button>
            <button
              type="button"
              className="yandex-btn" // Yandex uchun button
              onClick={handleYandexLogin}
            >
              <FaYandex size={"20px"} />
              Login with Yandex
            </button>
          </form>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default SignupForm;
