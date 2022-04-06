import Layout from '../components/Layout'
import s from '../styles/Home.module.css'
import MainForm from '../components/MainForm'

export default function Home() {
    return (
        <Layout>
            <div className={s.container}>
                <MainForm />
            </div>
        </Layout>
    )
}
