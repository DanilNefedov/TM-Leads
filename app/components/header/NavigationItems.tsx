import styles from './header.module.css'



interface Props {
    label:string
}


export function NavigationItems(props: Props){
    const { label } = props

    return(
        <li className="navigation-item">
            <a href="#" className={styles.navLinks}>{label}</a>
        </li>
    )
}