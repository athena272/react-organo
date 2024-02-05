import './Footer.module.scss'

export default function Footer() {
    return (
        <footer>
            <section>
                <ul>
                    <li>
                        <a href="facebook.com" target="_blank">
                            <img src="/assets/facebook.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com" target="_blank">
                            <img src="/assets/twitter.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="instagram.com" target="_blank">
                            <img src="/assets/instagram.png" alt="" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/assets/logo.png" alt="" />
            </section>
            <section>
                <p>
                    <strong>Desenvolvido por Guilherme R. Alves</strong>
                </p>
            </section>
        </footer>
    )
}