import { Divider, Skeleton } from "@mui/material";
import cx from "classnames";
import Head from "next/head";

import styles from "./PageHeader.module.scss";

interface PageHeaderProps {
  title: string;
  bottomRow?: React.ReactNode;
  leftExtras?: React.ReactNode[];
  rightExtras?: React.ReactNode[];
  htmlTitle?: string;
  loading?: boolean;
  divider?: boolean;
}

const PageHeader = ({
  title,
  leftExtras,
  rightExtras,
  bottomRow,
  htmlTitle,
  loading,
  divider = true,
}: PageHeaderProps) => {
  return (
    <div className={cx(styles.container)}>
      {htmlTitle && (
        <Head>
          <title>ZeroK Dashboard | {htmlTitle}</title>
        </Head>
      )}
      <header className={cx(styles["top-row"])}>
        <h3>
          {loading ?? !title ? <Skeleton width="50vw" height="50px" /> : title}
        </h3>
      </header>
      <div className={styles["bottom-row"]}>
        {bottomRow && bottomRow}
        <Divider />
      </div>
    </div>
  );
};

export default PageHeader;
