import styles from "./Footer.module.css";
 
function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();
 
  return (
    <footer className={styles.footer}>
      Copyright © {currentYear}
    </footer>
  );
}
 
export default Footer;