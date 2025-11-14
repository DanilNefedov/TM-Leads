import styles from './rates.module.css'


interface Props {
    type: "spot" | "futures"
}

export function Cards(props:Props) {
    const { type } = props
 
    return (
        <>
            <div className={`${styles.contentContainer} ${type === 'futures' ? styles.active : ""}`}>
                <div className={styles.sectionTop}>
                    <h3 className={styles.tabTitle}>STANDART</h3>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Ручной трейдинг</li>
                        <li className={styles.listItem}>Автоматическое или полуавтоматическое копирование сделок</li>
                        <li className={styles.listItem}>Личный кабинет со статистикой</li>
                        <li className={styles.listItem}>Среднесрочные сделки с уровнями набора портфеля</li>
                    </ul>
                </div>
                <div className={styles.sectionBot}>
                    <div className={styles.datePrice}>
                        <div className={styles.price}>$234 <span className={styles.discount}>-35%</span></div>
                        <div className={styles.date}>
                            <select className={styles.select}>
                                <option className={styles.option}>12 месяцев</option>
                                <option className={styles.option}>12 месяцев</option>
                                <option className={styles.option}>12 месяцев</option>
                            </select>
                        </div>
                    </div>

                    <button className={styles.btn}>
                        <span className={styles.btnTitle}>Попробовать</span>
                        <span className={styles.btnSupTitle}>5 дней бесплатно</span>
                    </button>
                </div>


            </div>

            <div className={`${styles.contentContainer} ${type === 'spot' ? styles.active : ""}`}>
                <div className={styles.sectionTop}>
                    <h3 className={styles.tabTitle}>VIP</h3>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Ручной трейдинг</li>
                        <li className={styles.listItem}>Автоматическое или полуавтоматическое копирование сделок</li>
                        <li className={styles.listItem}>Личный кабинет со статистикой</li>
                        <li className={styles.listItem}>Краткосрочные, среднесрочные и инвест сделки</li>
                        <li className={styles.listItem}>Доступ в Vip чат с командой</li>
                        <li className={styles.listItem}>Наш авторский курс по трейдингу</li>
                    </ul>
                </div>

                <div className={styles.sectionBot}>
                    <div className={styles.datePrice}>
                        <div className={styles.price}>$585 <span className={styles.discount}>-35%</span></div>
                        <div className={styles.date}>
                            <select className={styles.select}>
                                <option className={styles.option}>12 месяцев</option>
                                <option className={styles.option}>12 месяцев</option>
                                <option className={styles.option}>12 месяцев</option>
                            </select>
                        </div>
                    </div>

                    <button className={styles.btn}>
                        <span className={styles.btnTitle}>Попробовать</span>
                        <span className={styles.btnSupTitle}>5 дней бесплатно</span>
                    </button>
                </div>

            </div>
        </>
    )
}