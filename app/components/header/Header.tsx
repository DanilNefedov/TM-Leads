'use client'

import { NavigationItems } from "./NavigationItems";
import Link from "next/link";
import styles from './header.module.css'
import { useEffect, useState } from "react";



export function Header() {
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    


    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1050);

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';

        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);



    const navItems = [
        {
            id: '1',
            label: 'Цифры'
        },
        {
            id: '2',
            label: 'Сделки онлайн'
        },
        {
            id: '3',
            label: 'о компании'
        },
        {
            id: '4',
            label: 'как начать'
        },
        {
            id: '5',
            label: 'тарифы'
        },
        {
            id: '6',
            label: 'отзывы'
        },
        {
            id: '7',
            label: 'FAQ'
        }
    ]

    const menuContent = (
        <>
            <nav className={isMobile ? undefined : styles.navigation}>
                <ul className={styles.containerNav}>
                    {navItems.map((el) => (
                        <NavigationItems key={el.id} label={el.label} />
                    ))}
                </ul>
            </nav>
            <div className="auth">
                <div className={styles.containerAuth}>
                    <Link href="#" className={`primary-btn ${styles.btnLogIn} ${styles.btnsAuth}`}>
                        вход
                    </Link>
                    <Link href="#" className={`primary-btn ${styles.btnsAuth}`}>
                        регистрация
                    </Link>
                </div>
            </div>
        </>
    );

    return (
        <header className={styles.header}>
            <div className={`${styles.container} container`}>
                <div className="logo">
                    <a href="#">
                        <img alt="Trade Blade" src='/logo.png' ></img>
                    </a>
                </div>


                {isMobile ? (
                    <div className={styles.burgerMenu}>
                        <button
                            className={`${styles.burgerBtn} ${menuOpen ? styles.open : ''}`}
                            onClick={() => setMenuOpen((prev) => !prev)}
                        >
                            <span className={styles.menuSpan} />
                            <span className={styles.menuSpan} />
                            <span className={styles.menuSpan} />
                        </button>

                        {menuOpen && (
                            <div className={styles.mobileNav}>
                                {menuContent}
                            </div>
                        )}
                    </div>
                ) : (
                    <div className={styles.containerMenu}>
                        {menuContent}
                    </div>
                )}

            </div>
        </header>
    )
}