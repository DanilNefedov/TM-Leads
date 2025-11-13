import styles from './questions.module.css'






export function Questions() {


    return (
        <section className={styles.questions}>
            <div className={`container ${styles.container}`}>
                <h2 className={styles.title}>часто задаваемые вопросы</h2>
                <div className={styles.accordions}>
                    <details open className={styles.accordion}>
                        <summary className={styles.summary}>Что такое TradeBlade
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M6 9.5L12 15.5L18 9.5" stroke="#030718" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </summary>
                        <p className={styles.text}>Мы опытная команда, для которой трейдинг – профессия. TradeBlade является авторизованным официальным брокером биржи Binance. </p>
                        <p className={styles.text}>Он представляет пользователям множество преимуществ, таких как более високая скорость синхронизации API и возможность создать учетную запись Binance через платформу TradeBlade всего в 1 клик. </p>
                    </details>
                    <details className={styles.accordion}>
                        <summary className={styles.summary}>Что TradeBlade предлагает инвесторам
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M6 9.5L12 15.5L18 9.5" stroke="#030718" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </summary>
                        <p className={styles.text}>Мы опытная команда, для которой трейдинг – профессия. TradeBlade является авторизованным официальным брокером биржи Binance. </p>
                        <p className={styles.text}>Он представляет пользователям множество преимуществ, таких как более високая скорость синхронизации API и возможность создать учетную запись Binance через платформу TradeBlade всего в 1 клик. </p>
                    </details>
                    <details className={styles.accordion}>
                        <summary className={styles.summary}>Должен ли я перевести свои средства на TradeBlade
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M6 9.5L12 15.5L18 9.5" stroke="#030718" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </summary>
                        <p className={styles.text}>Мы опытная команда, для которой трейдинг – профессия. TradeBlade является авторизованным официальным брокером биржи Binance. </p>
                        <p className={styles.text}>Он представляет пользователям множество преимуществ, таких как более високая скорость синхронизации API и возможность создать учетную запись Binance через платформу TradeBlade всего в 1 клик. </p>
                    </details>
                </div>
            </div>
        </section>
    )
}