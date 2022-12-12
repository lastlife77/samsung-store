import React from 'react';
import styles from './Footer.scss'

function Footer(props){
    return(
        <div className="footer">
            <div className='line'>

            </div>
            <div className='blocks'>
                <div className='leftBlock'>
                    <div className='logo'>
                        <img src="icons/logo.svg"></img>
                    </div>
                    <div className='leftItem'>
                        <p>Смартфоны</p>
                    </div>
                    <div className='leftItem'>
                        <p>Планшеты</p>
                    </div>
                    <div className='leftItem'>
                        <p>Бытовая техника</p>
                    </div>
                    <div className='leftItem'>
                        <p>Аксессуары</p>
                    </div>
                    <div className='leftItem'>
                        <p>Уценка</p>
                    </div>
                </div>
                <div className='midBlock'>
                    <div className='midTitle'>
                        <p>Поддержка</p>
                    </div>
                    <div className='midItem'>
                        <p>О компании</p>
                    </div>
                    <div className='midItem'>
                        <p>Акции</p>
                    </div>
                    <div className='midItem'>
                        <p>Магазины</p>
                    </div>
                    <div className='midItem'>
                        <p>Оплата</p>
                    </div>
                    <div className='midItem'>
                        <p>Кредит</p>
                    </div>
                    <div className='midItem'>
                        <p>Доставка</p>
                    </div>
                    <div className='midItem'>
                        <p>Установка техники</p>
                    </div>
                    <div className='midItem'>
                        <p>Сервисное обслуживание</p>
                    </div>
                    <div className='midItem'>
                        <p>Обмен и возврат</p>
                    </div>
                    <div className='midItem'>
                        <p>Бонусная программа</p>
                    </div>
                    <div className='midItem'>
                        <p>Политика конфиденциальности</p>
                    </div>
                    <div className='midItem'>
                        <p>Условия продажи</p>
                    </div>
                </div>
                <div className='rightBlock'>
                    <div className='rightTitle'>
                        <p>Контакты</p>
                    </div>
                    <div className='rightItem'>
                        <p>E-mail:</p>
                        <p>info@online-samsung.ru</p>
                    </div>
                    <div className='rightItem'>
                        <p>Телефон</p>
                        <p>8 800 755-7525</p>
                        <p>Ежедневно с 9:00 до 22:00</p>
                    </div>
                    <div className='rightItem'>
                        <p>Адрес</p>
                        <p>ООО "ГЭЛЭКСИМАРТ", г. Москва,<br/> Волоколамское шоссе, д.1,<br/> стр. 1</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;