import styles from './past-transactions.module.css'



export function PastTransactions(){


    return(
        <section className={styles.pastTransactions}>
            <div className={`container ${styles.container}`}>
                <div>
                    <h2 className={styles.title}>Прошедшие сделки</h2>
                    <span className={styles.supTitle}>Онлайн</span>
                </div>

                <div className="swiper"></div>


            </div>
        </section>
    )
}