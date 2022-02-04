import styles from './styles/ArrowLink.module.scss';

export default function ArrowLink({children}) {
    return (
        <div className={`${styles["link"]} ${styles["link--arrowed"]}`}>
            {children}
            <svg className={styles["arrow-icon"]} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                <g fill="none" className={styles["arrow-stroke"]} strokeWidth="2" strokeLinejoin="round" strokeMiterlimit="10">
                    <circle className={styles["arrow-icon--circle"]} cx="16" cy="16" r="15.12"/>
                    <path className={styles["arrow-icon--arrow"]} d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"/>
                </g>
            </svg>
        </div>
    )
}