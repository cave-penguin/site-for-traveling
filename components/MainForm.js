import Image from 'next/image'

import { useState } from 'react'

import image from '../public/main.jpeg'

import s from '../styles/MainForm.module.css'

export default function MainForm() {
    const [text, setText] = useState('')
    console.log(text)

    return (
        <>
            <div className={s.main_form}>
                <div className={s.btn_form}>
                    <button className={s.btn}>Транспорт</button>
                    <button className={s.btn}>Рестораны</button>
                    <button className={s.btn}>Что посмотреть?</button>
                </div>
                <input
                    type="text"
                    className={s.input}
                    placeholder="Куда Вы едете?"
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                ></input>
                <button className={s.btn_search}>Поиск</button>
            </div>
            <Image src={image} alt="the world map" width={1200} height={630} />
        </>
    )
}
