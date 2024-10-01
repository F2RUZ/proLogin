import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify"; // Toastify kutubxonasi
import "react-toastify/dist/ReactToastify.css"; // Toastify styling
import "./login.scss";
import logo from "../../assets/img/DA-logo-White.png";
import Modal from "../modal/Modal";
import Information from "../information/Information";
import img from "../../assets/img/information.png";

const Login = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [selectedTimes, setSelectedTimes] = useState([]);
  const [username, setUsername] = useState("");
  const [telegramUsername, setTelegramUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false); // Jo'natish jarayoni uchun holat

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Jo'natilayotganini bildirish
    const message = `
      Ism: ${username}\n
      Telegram Username: ${telegramUsername}\n
      Telefon Raqam: ${phone}\n
      Qatnashish Vaqti: ${selectedTimes.join(", ")}
    `;

    try {
      // Axios orqali Telegram botga yuborish
      await axios.post(
        `https://api.telegram.org/bot7276780290:AAFZ5uwwEw3HwQn86eHxCV126WTpGdZ5pvo/sendMessage`,
        {
          chat_id: "5176693678",
          text: message,
        }
      );
      toast.success("Successfull", {
        position: "top-center",
      });
    } catch (error) {
      toast.error("Xatolik yuz berdi, qayta urinib ko'ring!");
    } finally {
      setLoading(false); // Yuborish jarayoni tugagach tugmani qayta tiklash
    }
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedTimes([...selectedTimes, value]);
    } else {
      setSelectedTimes(selectedTimes.filter((time) => time !== value));
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleYes = () => {
    closeModal();
  };

  const handleNo = () => {
    window.location.href = "https://t.me/your_channel_link";
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setModalOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-wrapper">
      <div className="form-wrapper">
        <img className="logo" src={logo} alt="" />
        {showLoginForm && (
          <div className="signup-form">
            <form onSubmit={handleSubmit}>
              <h2 className="form-title">
                Dasturlashga ilk qadam IT Time Academydan boshlanadi bepul
                maslahatga yoziling !!!
              </h2>
              <div className="form-group">
                <label htmlFor="username">Ismingiz :</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  placeholder="ex: Feruz"
                />
              </div>
              <div className="form-group">
                <label htmlFor="telegramUsername">Telegram username :</label>
                <input
                  type="text"
                  id="telegramUsername"
                  name="telegramUsername"
                  value={telegramUsername}
                  onChange={(e) => setTelegramUsername(e.target.value)}
                  required
                  placeholder=" ex: @F2RUZ"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Telefon raqam :</label>
                <input
                  type="number"
                  placeholder="ex: +998912345678"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <h4 className="form-time">Qaysi vaqtda qatnasha olasiz?</h4>
              <div className="checkbox-group">
                {[
                  "10:00 - 12:00",
                  "15:00 - 17:00",
                  "17:00 - 19:00",
                  "19:00 - 21:00",
                ].map((time) => (
                  <div className="form-group" key={time}>
                    <label>
                      <input
                        type="checkbox"
                        value={time}
                        onChange={handleCheckboxChange}
                      />
                      {time}
                    </label>
                  </div>
                ))}
              </div>

              <button className="submit" type="submit" disabled={loading}>
                {loading ? "Yuborilmoqda..." : "Yuborish"}
              </button>
            </form>
          </div>
        )}
        {modalOpen && (
          <Modal
            isOpen={modalOpen}
            onClose={closeModal}
            onYes={handleYes}
            onNo={handleNo}
          />
        )}
      </div>

      <div className="information-wrapper">
        <img className="main-page-images" src={img} alt="" />
        <Information />
      </div>

      <ToastContainer />
    </div>
  );
};

export default Login;
