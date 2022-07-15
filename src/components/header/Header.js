import React from 'react';
import './Header.css';

import * as dayjs from 'dayjs';
import * as isLeapYear from 'dayjs/plugin/isLeapYear'
import 'dayjs/locale/ru'

import { Context } from "../utils/context";
import { useContext } from "react";

export const Header = () => {

   const [data, setdata] = useContext(Context);

   let format = {
      day: "DD",
      week: "w",
      month: "MMMM",
      year: "year"
   }

   return (
      <header className="header">

         <div className="header__left">
            {
               dayjs().format('DD MMMM YYYY')
            }
         </div>

         <div className="header__centre">
            <button className="header__centre-l" onClick={() => setdata({ ...data, now: data.now.add(-1, data.mode) })}></button>
            <div className="header__centre-item">
               {
                  data.now.format('DD MMMM YYYY')
               }
            </div>
            <button className="header__centre-r" onClick={() => setdata({ ...data, now: data.now.add(1, data.mode) })}></button>
         </div>

         <div className="header__right">
            {
               // <select onChange = {(t) => {console.log(t.target.value)}}>
               //    <option value="">Выберите что-нибудь</option>
               //    <option value="1">Вариант 1</option>
               //    <option value="2">Вариант 2</option>
               //    <option value="3">Вариант 3</option>
               // </select>
            }

            <select className='header__right-select'
               onChange={(e) => {
                  setdata({ ...data, mode: e.target.value })
               }}>
               <option value="year">Год</option>
               <option value="month">Месяц</option>
               <option value="week">Неделя</option>
               <option value="day"> День</option>
            </select>


            {/* <ul className="header__list">
               <li><button onClick={() => setdata({ ...data, mode: "day" })}>День</button></li>
               <li><button onClick={() => setdata({ ...data, mode: "week" })}>Неделя</button></li>
               <li><button onClick={() => setdata({ ...data, mode: "month" })}>Месяц</button></li>
               <li><button onClick={() => setdata({ ...data, mode: "year" })}>Год</button></li>
            </ul> */}
         </div>

      </header>
   );
}