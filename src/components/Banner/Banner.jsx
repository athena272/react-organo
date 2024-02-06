import styles from './Banner.module.scss'

export default function Banner() {

    return (
        <header className={styles.banner}>
            <img
                src="/assets/banner.png"
                alt="O banner principal da página do Organo"
                rel="preload"
                width={1440}
                height={556}
            />
        </header>
    )
}