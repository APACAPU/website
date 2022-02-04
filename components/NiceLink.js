import styles from './styles/NiceLink.module.scss';

export default function NiceLink({children}) {

    return (
        <span className={styles['nice-link']}>
            {children}
        </span>
    )
}