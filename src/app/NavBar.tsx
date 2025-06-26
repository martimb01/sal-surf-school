import styles from './NavBar.module.css'

export default function NavBar() {
    return(
        <div className={styles.navBar}>
            <ul className={styles.optionsList}>
                <li>Lessons</li>
                <li>About us</li>
                <li>Contacts</li>
            </ul>
        </div>

    )
}