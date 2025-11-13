import styles from './hero.module.css'





export function Hero(){


    return(
        <section className={styles.hero}>
            <div className={`container ${styles.container}`}>
                <div className={styles.mainInfo}>
                    <h1 className={styles.title}>
                        моментально Копируй сделки профи трейдеров
                    </h1>
                    <p className={styles.subtitle}>
                        Начни копировать сделки с успешной командой профессиональных трейдеров в автоматическом режиме.
                    </p>
                    <div className={styles.inputContainer}>
                        <input type="text" placeholder='Ваш e–mail' className={styles.input}/>
                        <button type="button" className={`primary-btn ${styles.btn}`}>начать</button>
                    </div>
                    <span className={styles.supText}>5 дней бесплатного пользования</span>
                </div>
                <div className={styles.media}>
                    <img 
                        alt='Hero' 
                        src='/images/hero.png'
                    ></img>
                </div>
            </div>
        </section>
    )
}