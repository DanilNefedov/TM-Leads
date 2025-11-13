import Image from "next/image";
import { NavigationItems } from "./NavigationItems";
import Link from "next/link";
import styles from './header.module.css'



export function Header(){

    const navItems = [
        {
            id:'1',
            label:'Цифры'
        },
        {
            id:'2',
            label:'Сделки онлайн'
        },
        {
            id:'3',
            label:'о компании'
        },
        {
            id:'4',
            label:'как начать'
        },
        {
            id:'5',
            label:'тарифы'
        },
        {
            id:'6',
            label:'отзывы'
        },
        {
            id:'7',
            label:'FAQ'
        }
    ]


    return(
        <header className={styles.header}>
            <div className={`${styles.container} container`}>
                <div className="logo">
                    <a href="#">
                        <Image alt="Trade Blade" src='/logo.png' width={132} height={64} loading='eager'></Image>
                    </a>
                </div>

                <nav className={styles.navigation}>
                    <ul className={styles.containerNav}>
                        {
                            navItems.map(el => (
                                <NavigationItems key={el.id} label={el.label}></NavigationItems>
                            ))
                        }
                    </ul>
                </nav>

                <div className="auth">
                    <div className={styles.containerAuth}>
                        <Link href={'#'} className={`primary-btn ${styles.btnLogIn} ${styles.btnsAuth}`}>вход</Link>
                        <Link href={'#'} className={`primary-btn ${styles.btnsAuth}`}>регистрация</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}