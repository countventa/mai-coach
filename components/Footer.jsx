import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

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

      <a href="https://instagram.com/TONCOMPTE" target="_blank">
        <FaInstagram size={20} />
      </a>

      <a href="https://tiktok.com/@TONCOMPTE" target="_blank">
        <FaTiktok size={20} />
      </a>

      <a href="https://youtube.com/@TONCOMPTE" target="_blank">
        <FaYoutube size={20} />
      </a>
    </footer>
  );
}