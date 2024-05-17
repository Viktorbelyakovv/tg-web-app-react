import React, {useEffect} from 'react';
import './Form.css';
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {
    const [country, setCountry] = React.useState('');
    const [street, setStreet] = React.useState('');
    const [subject, setSubject] = React.useState('physical');

    const {tg} = useTelegram();

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, [tg]);

    useEffect(() => {
        if (!street || !country) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, []);

    const onChangeCountry = (event) => {
        setCountry(event.target.value);
    }

    const onChangeStreet = (event) => {
        setStreet(event.target.value);
    }

    const onChangeSubject = (event) => {
        setSubject(event.target.value);
    }

    return (
        <div className={'form'}>
            <h3>Введите ваши данные</h3>
            <input
                className={'input'}
                type={'text'}
                placeholder={'Страна'}
                value={country}
                onChange={onChangeCountry}
            />
            <input
                className={'input'}
                type={'text'}
                placeholder={'Улица'}
                value={street}
                onChange={onChangeStreet}
            />
            <select value={subject} onChange={onChangeSubject} className={'select'}>
                <option value={'physical'}>Физ. лицо</option>
                <option value={'legal'}>Юр. лицо</option>
            </select>
        </div>
    )
}

export default Form;