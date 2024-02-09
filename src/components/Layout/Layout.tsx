import React from "react";
import styles from "./Layout.module.scss";
import Header from "components/Header";
import Head from "next/head";
import { ThemeProvider } from "@mui/material";
import theme from "utils/theme";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zerok Nexus</title>
        <meta name="description" content="Zerok" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <ThemeProvider theme={theme}>
        <Header />
        <div className={styles.content}>{children}</div>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
