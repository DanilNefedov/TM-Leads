'use client'


import { useEffect, useRef, useState } from 'react';
import styles from './numbers.module.css'




export function Numbers() {
    const [isVisible, setIsVisible] = useState(false);
    const [profit, setProfit] = useState(0);
    const [deals, setDeals] = useState(0);
    const [subscribersProfit, setSubscribersProfit] = useState(0);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [isVisible]);

    useEffect(() => {
        if (!isVisible) return;

        const duration = 2000;
        const steps = 60;
        const interval = duration / steps;

        const targetProfit = 2756;
        const targetDeals = 67;
        const targetSubscribersProfit = 375000;

        let currentStep = 0;

        const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);

            setProfit(Math.floor(targetProfit * easeOutProgress));
            setDeals(Math.floor(targetDeals * easeOutProgress));
            setSubscribersProfit(Math.floor(targetSubscribersProfit * easeOutProgress));

            if (currentStep >= steps) {
                setProfit(targetProfit);
                setDeals(targetDeals);
                setSubscribersProfit(targetSubscribersProfit);
                clearInterval(timer);
            }
        }, interval);

        return () => clearInterval(timer);
    }, [isVisible]);


    return (
        <section ref={sectionRef} className={styles.numbers}>
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
                        <p className={styles.statsInfo}>{profit}%</p>
                    </div>

                    <div>
                        <p className={styles.statsTitle}>фьючерсных и спотовых сделок</p>
                        <p className={styles.statsInfo}>{deals}</p>
                    </div>

                    <div>
                        <p className={styles.statsTitle}>прибыль подписчиков</p>
                        <p className={styles.statsInfo}>{subscribersProfit}</p>
                    </div>
                </div>

            </div>
        </section>
    )
}