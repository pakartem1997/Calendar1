import React from 'react';
import * as dayjs from 'dayjs';
import * as isLeapYear from 'dayjs/plugin/isLeapYear'
import 'dayjs/locale/ru'

import { Day } from "../day/Day";
import { Context } from "../utils/context";
import { useContext } from "react";

import './Week.css';

export const Week = (props) => {

   const [data, setdata] = useContext(Context);

   let now = data.now.startOf('week')

   return (
      <div className='week__container'>
         {
            [...Array(7)].map((item, index) => <div className='week__item'>
               <div className='week__day'>
                  {
                     now.add(index, 'day').format('D')
                  }
               </div>
               {
                  [...Array(24)].map((item, index) => <div className='week__time'>
                     <div className='week__time-item'></div>
                     <div className='week__time-item'></div>
                  </div>)
               }
            </div>)
         }
      </div>
   );
}