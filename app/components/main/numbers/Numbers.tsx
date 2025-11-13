import styles from './numbers.module.css'




export function Numbers(){


    return(
        <section className={styles.numbers}>
            <div className={styles.svgContainer}> 
                {/* <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 639 60" fill="none">
                    <path d="M0 0H575.686C577.808 0 579.843 0.842855 581.343 2.34315L639 60H0V0Z" fill="white"/>
                </svg> */}
                <img src="/images/white-block.svg" alt="background" />
            </div>
           


            <div className={`container ${styles.container}`}>
                <div>
                    <h2 className={styles.title}>Цифры</h2>
                    <p className={styles.subTitle}>Cентябрь 2022</p>
                </div>
                
                <div className={styles.stats}>
                    <div>
                        <p className={styles.statsTitle}>Торговой прибыли</p>
                        <p className={styles.statsInfo}>2756%</p>
                    </div>

                    <div>
                        <p className={styles.statsTitle}>фьючерсных и спотовых сделок</p>
                        <p className={styles.statsInfo}>67</p>
                    </div>

                    <div>
                        <p className={styles.statsTitle}>прибыль подписчиков</p>
                        <p className={styles.statsInfo}>375000</p>
                    </div>
                </div>
                
            </div>
        </section>
    )
}