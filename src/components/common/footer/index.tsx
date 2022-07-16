import React from "react";
import * as Image from "../../../assets";
import styles from "./footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
          <span className={styles.footer__text}>
            from <a className={styles.footer__link} href="https://binary-studio.com">binary studio</a> with
            <img className={styles.footer__icon} src={Image.Heart} alt="heart icon"/>
          </span>
        </footer>
    );
}

export default Footer;