import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import styles from "./index.module.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className={styles.page}>
      <div className={styles.mainContent}>
        <App />
      </div>
    </div>
  </React.StrictMode>
);
