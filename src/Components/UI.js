import React from 'react';
import Head from './Head/Head';
import Main from './Main/Main';
import Footer from './Footer/Footer';

import styles from './ui.module.css';

const UI = () => {
    return (
        <div className={styles["ui"]}>
            <Head />
            <Main />
            <Footer />
        </div>
    );
};

export default UI;