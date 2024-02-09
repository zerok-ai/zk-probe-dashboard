import Image from "next/image";
import styles from "./Header.module.scss";
import Link from "next/link";
import { Button } from "@mui/material";

const Header = () => {
  return (
    <div className={styles.container}>
      <div>
        <Link href="/">
          <Image src="/zerok_logo.svg" alt="logo" width={120} height={40} />
        </Link>
      </div>
      {/* Logout button */}
      {/* <Button variant="contained" color="primary">
        Logout
      </Button> */}
    </div>
  );
};

export default Header;
