import styles from './past-transactions.module.css'



interface Props {

    name: string;
    type_time: {
        type: string;
        time: string;
    };
    profit: string;
    percent: string;
    goal: string;
    date: string;
}



export function Slide({ el }: { el: Props }) {
    const { date, goal, name, percent, profit, type_time } = el
    const {time, type} = type_time

    return (
        <div className={styles.slideContainer}>
            <div className="firts">
                <h3 className={styles.slideTitle}>
                    {name}
                </h3>
                <p className={styles.slideSupTitle}>
                    <span className={styles.type}>{type}</span>
                    <span className={styles.time}>{time}</span>
                </p>
            </div>
            

            <div className="second">
                <p className={styles.profit}>{profit}</p>

                <p className={styles.percent}>{percent}</p>

                <div className={styles.goalDate}>
                    <p className={styles.goal}>{goal}</p>

                    {/* It is possible to make a correct translation and transfer of data to 
                establish the time and date. Currently, it is like a placeholder. */}

                    <time className={styles.date} dateTime="2025-11-14">{date}</time>
                </div>
            </div>

        </div>
    )
}