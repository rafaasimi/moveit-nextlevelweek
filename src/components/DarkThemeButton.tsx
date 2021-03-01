import React from "react";
import styles from "../styles/components/DarkThemeButton.module.css";

const DarkThemeButton = () => {
  const [check, setCheck] = React.useState();

  function handleDarkMode() {
    const darkmode = localStorage.getItem("darkmode");

    if (darkmode === null || darkmode === "false") {
      document.body.classList.add("dark-theme");
      localStorage.setItem("darkmode", true);
      setCheck(true);
    } else if (darkmode === "true") {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("darkmode", false);
      setCheck(false);
    }
  }

  React.useEffect(() => {
    const darkmode = localStorage.getItem("darkmode");

    if (darkmode === "true") {
      document.body.classList.add("dark-theme");
      setCheck(true);
    } else if (darkmode === "false") {
      document.body.classList.remove("dark-theme");
      setCheck(false);
    }
  }, []);

  return (
    <div className={styles.center}>
      <input type="checkbox" id={styles.darkModeToggle} onClick={handleDarkMode} checked={check} />
    </div>
  );
};

export default DarkThemeButton;
