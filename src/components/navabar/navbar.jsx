import { useState } from "react";

import styles from "./navbar.module.css";


export const Navbar = () => {

    const [account, setAccount] = useState(false);

    return (
        <nav className={styles.navContainer}>
            <div className={styles.topBar}>
                <div className={styles.leftMenu}>
                    <div className={styles.title}>
                        <a href="#">E-Banking</a>
                    </div>
                    <div className={styles.featuresBoard}>
                        <ul className={styles.features}>
                            <li><a href="#home">Home</a> </li>
                            <li><a href="#accounts">Accounts</a> </li>
                            <li><a href="#statements">Statements</a> </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.rightMenu}>
                    <div className={styles.account} onClick={() => setAccount(!account)}>
                    </div>
                </div>
            </div>
            <div className={styles.bodyNavContainer}>
                <div className={styles.leftSideBar}>
                    <ul>
                        <li><a href="#accounts">Admin Accounts</a> </li>
                        <li><a href="#accounts">User Accounts</a> </li>
                        <li><a href="#accounts">Customer Accounts</a> </li>
                    </ul>
                </div>
                {
                    account ? <div className={styles.rightSideBar}>
                        <ul>
                            <li><a href="#accounts">Accounts</a> </li>
                            <li><a href="#Settings">Settings</a> </li>
                            <li><a href="#logOut">Log Out</a> </li>
                        </ul>
                    </div> : null
                }
            </div>
        </nav>
    )
}