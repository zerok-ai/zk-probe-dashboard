import React from "react";
import styles from "./Layout.module.scss";
import Header from "components/helpers/Header";

import { ThemeProvider } from "@mui/material";
import theme from "utils/theme";
import PageHeader from "components/helpers/PageHeader";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <ThemeProvider theme={theme}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.content}>{children}</div>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
