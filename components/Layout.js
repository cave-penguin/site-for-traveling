import Head from 'next/head'
import Link from 'next/link'
import s from '../styles/Layout.module.css'

export default function Layout({ children }) {
    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta name="keywords" content="trip, travel, contries" />
                <meta name="description" content="site for travelers" />
                <title>Main Page</title>
            </Head>
            <header className={s.header}>
                <div className={s.button_block}>
                    {/* <button> */}
                    <Link className={s.main_word} href="/">
                        <a className={s.a}>Название</a>
                    </Link>
                    {/* </button> */}
                    <div className={s.little_words_block}>
                        <button className={s.little_words}>Язык</button>
                        <button className={s.little_words}>Войти</button>
                    </div>
                </div>
            </header>
            <main>{children}</main>
        </div>
    )
}
