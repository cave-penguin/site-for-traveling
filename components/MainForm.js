import s from '../styles/MainForm.module.css'

export default function MainForm() {
    return (
        <>
            <div className={s.main_form}>
                <div>
                    <button className={s.btn_form}>Транспорт</button>
                    <button className={s.btn_form}>Рестораны</button>
                    <button className={s.btn_form}>Что посмотреть?</button>
                </div>
                <div className={s.input_form}>
                    <input
                        type="text"
                        className={s.input}
                        placeholder="Куда Вы едете?"
                    ></input>
                </div>
            </div>
        </>
    )
}
