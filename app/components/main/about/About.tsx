import styles from './about.module.css'



export function About(){

    return(
        <section className={styles.about}>

            <div className={styles.svgContainer}> 
                <img src="/images/white-block.svg" alt="background" />
            </div>

            <div className={`container ${styles.container}`}>
                <div className={styles.text}>
                    <h2 className={styles.title}>О компании</h2>
                    <p className={styles.subTitle}>Мы опытная команда, для которой трейдинг – профессия. TradeBlade является авторизованным официальным брокером биржи Binance. </p>
                    <p className={styles.subTitle}>Он представляет пользователям множество преимуществ, таких как более високая скорость синхронизации API и возможность создать учетную запись Binance через платформу TradeBlade всего в 1 клик.</p>
                </div>

                <div className={styles.form}>
                    <h3 className={styles.formTitle}> Попробуйте сейчас и получите <br/> 5 дней бесплатного пользования</h3>
                    <div className={styles.inputContainer}>
                        <input type="text" placeholder='Ваш e–mail' className={styles.input}/>
                        <button type="button" className={`primary-btn ${styles.btn}`}>попробовать</button>
                    </div>
                </div>
            </div>

        </section>
    )
}