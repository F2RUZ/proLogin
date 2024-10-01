import React from "react";
import "./information.scss"; // SCSS fayl
import { FaGraduationCap } from "react-icons/fa";

const Information = () => {
  return (
    <div className="info-component">
      <h1 className="info-title">
        <FaGraduationCap size={"80px"} /> Dasturlashni o'rganmoqchimisiz?
      </h1>
      <p className="info-description">Bizda quyidagi imkoniyatlar mavjud:</p>
      <ul className="info-list">
        <li>⭐ Senior darajadagi ustozlar</li>
        <li>🛠 Amaliy ko'nikmalar</li>
        <li>📈 Pullik Real loyihalarda tajriba to'plash</li>
        <li>🚀 Startup loyihangizga investitsiya kiritish imkoniyati</li>
        <li>🌐 Zamonaviy dasturlash atmosferasi</li>
        <li>📚 Muntazam treninglar va seminarlar</li>
        <li>🤝 Mentorlar bilan individual qo'llab-quvvatlash</li>
        <li>🎓 Sertifikatlar bilan taqdirlash</li>
        <li>☕ Bepul coworking zona 24/7 markaz hududida bo'lish imkoniyati</li>
        <li>💻 Onlayn o'qish imkoniyati</li> {/* Qo'shilgan joy */}
      </ul>
      <p className="info-final">
        Professional dasturchi bo'lmoqchi bo'lsangiz hoziroq ro‘yxatdan o‘ting!
      </p>
    </div>
  );
};

export default Information;
