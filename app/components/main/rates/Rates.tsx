'use client'

import { useState } from 'react';
import { Cards } from './Cards'
import styles from './rates.module.css'




export function Rates() {
    const [activeTab, setActiveTab] = useState<"spot" | "futures">("spot");


    return (
        <section className={styles.rates}>
            <div className={`container ${styles.container}`}>
                <h2 className={styles.title}>тарифы</h2>

                {/* <div className="tabs"> */}
                <div className={styles.tabsHeader}>

                    <div
                        className={styles.tabIndicator}
                        style={{
                            transform: activeTab === "spot" ? "translateX(0%)" : "translateX(100%)"
                        }}
                    />
                    <div
                        className={`${styles.tab} ${activeTab === "spot" ? styles.activeTab : ""}`}
                        onClick={() => setActiveTab("spot")}
                    >СПОТ</div>
                    <div
                        className={`${styles.tab} ${activeTab === "futures" ? styles.activeTab : ""}`}
                        onClick={() => setActiveTab("futures")}
                    >фьючерс</div>
                </div>

                <div className={styles.tabsContainer}>
                    {activeTab === "spot" && <Cards type={activeTab} />}
                    {activeTab === "futures" && <Cards type={activeTab} />}
                </div>
                {/* </div> */}
            </div>
        </section>
    )
}