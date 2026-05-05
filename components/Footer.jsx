import { FaInstagram, FaTiktok, FaYoutube, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "15px",
      padding: "20px",
      borderTop: "1px solid #eee",
      marginTop: "40px"
    }}>
      <span>© 2026 Mai</span>

      <a href="https://www.instagram.com/maicoa.ch/" target="_blank" style={{ color: "#000" }}>
        <FaInstagram size={20} />
      </a>

      <a href="https://tiktok.com/@maicoa.ch" target="_blank" style={{ color: "#000" }}>
        <FaTiktok size={20} />
      </a>

      <a href="https://youtube.com/@maicoach" target="_blank" style={{ color: "#000" }}>
        <FaYoutube size={20} />
      </a>

      <a href="mailto:getmaicoach@gmail.com" style={{ color: "#000" }}>
        <FaEnvelope size={20} />
      </a>
    </footer>
  );
}
