import styles from './footer.module.css'





export function Footer(){


    return(
        <footer className={styles.footer}>
            <hr className={styles.lineSection} />
            <div className={`container ${styles.container}`}>
                <div className={styles.first}>
                    <h2 className={styles.title}>Быстрая навигация</h2>
                    <nav>
                        <ul className={styles.navContainer}>
                            <li><a href="#">Цифры</a></li>
                            <li><a href="#">Сделки онлайн</a></li>
                            <li><a href="#">о компании</a></li>
                            <li><a href="#">tradeblad это</a></li>
                            <li><a href="#">тарифы</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </nav>
                </div>
                <div className={styles.second}>
                    

                    <div className={styles.logo}>
                        <img src='/logo.png' alt="Trade Blade" />
                    </div>

                    <div>
                        <p className={styles.copy}>&copy; 2022 TradeBlade. All rights reserved.</p>
                    </div>
                </div>
            </div>
            <hr className={styles.line}/>
        </footer>
    )
}


