'use client'


import { useEffect, useRef, useState } from 'react';
import styles from './questions.module.css'






export function Questions() {

    const [visibleItems, setVisibleItems] = useState<number[]>([]);
    const sectionRef = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated.current) {
                        hasAnimated.current = true;

                        [0, 1, 2].forEach((index) => {
                            setTimeout(() => {
                                setVisibleItems((prev) => [...prev, index]);
                            }, index * 250);
                        });
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const accordionData = [
        {
            title: "Что такое TradeBlade",
            content: [
                "Мы опытная команда, для которой трейдинг – профессия. TradeBlade является авторизованным официальным брокером биржи Binance.",
                "Он представляет пользователям множество преимуществ, таких как более високая скорость синхронизации API и возможность создать учетную запись Binance через платформу TradeBlade всего в 1 клик."
            ]
        },
        {
            title: "Что TradeBlade предлагает инвесторам",
            content: [
                "Мы опытная команда, для которой трейдинг – профессия. TradeBlade является авторизованным официальным брокером биржи Binance.",
                "Он представляет пользователям множество преимуществ, таких как более високая скорость синхронизации API и возможность создать учетную запись Binance через платформу TradeBlade всего в 1 клик."
            ]
        },
        {
            title: "Должен ли я перевести свои средства на TradeBlade",
            content: [
                "Мы опытная команда, для которой трейдинг – профессия. TradeBlade является авторизованным официальным брокером биржи Binance.",
                "Он представляет пользователям множество преимуществ, таких как более високая скорость синхронизации API и возможность создать учетную запись Binance через платформу TradeBlade всего в 1 клик."
            ]
        }
    ];


    return (
        <section ref={sectionRef} className={styles.questions}>
            <div className={`container ${styles.container}`}>
                <h2 className={styles.title}>часто задаваемые вопросы</h2>
                <div className={styles.accordions}>
                    {accordionData.map((item, index) => (
                        <details
                            key={index}
                            open={index === 0}
                            className={`${styles.accordion} ${visibleItems.includes(index) ? styles.visible : ''}`}
                            style={{
                                opacity: visibleItems.includes(index) ? 1 : 0,
                                transform: visibleItems.includes(index) ? 'translateX(0)' : 'translateX(100px)',
                                transition: 'opacity 1.6s ease-out, transform 0.6s ease-out'
                            }}
                        >
                            <summary className={styles.summary}>
                                {item.title}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M6 9.5L12 15.5L18 9.5" stroke="#030718" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </summary>
                            {item.content.map((text, textIndex) => (
                                <p key={textIndex} className={styles.text}>{text}</p>
                            ))}
                        </details>
                    ))}
                </div>
            </div>
        </section>
    )
}