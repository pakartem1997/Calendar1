import React from 'react';
import * as dayjs from 'dayjs';
import * as isLeapYear from 'dayjs/plugin/isLeapYear'
import 'dayjs/locale/ru'

import cn from 'classnames';

import { Context } from "../utils/context";
import { useContext } from "react";
import { Day } from "../day/Day";

import './Month.css';

export const Month = (props) => {

   const [data, setdata] = useContext(Context);

   let presentYear = data.now.get('year');

   let inndexOfMonth = props.inndexOfMonth
      !== undefined
      ? props.inndexOfMonth
      : data.now.get('month');

   let now = dayjs().year(presentYear).date(1);
   now = now.set('month', inndexOfMonth);

   let nameOfMonth = now.format('MMMM');
   let daysOfMonth = [...Array(now.daysInMonth())];
   let weekday = [...Array(7)];

   let start = now.startOf('month');
   let end = now.clone().endOf('day')

   let s = now.startOf('month');//dayjs().startOf('month');
   let e = now.clone().endOf('day');

   for (let i = 0; i < now.daysInMonth(); i++) {

      let a = s.add(i, 'day').unix() <= dayjs().unix() && dayjs().unix() <= e.add(i, 'day').unix()

      daysOfMonth[i] = <>
         {
            a ? <Day className={cn(props.month__days__inner, props.today)} indexOfDay={i} />
               : <Day className={cn(props.month__days__inner)} indexOfDay={i} />
         }
      </>
   }

   if (now.get('day') > 1) {
      daysOfMonth = [...Array(now.get('day') - 1).fill(<div className={props.month__days__inner}></div>), ...daysOfMonth];
   } else if (now.get('day') === 0) {
      daysOfMonth = [...Array(6).fill(<div className={props.month__days__inner}></div>), ...daysOfMonth];
   }

   if (now.set('date', now.daysInMonth()).get('day') > 0) {
      daysOfMonth = [...daysOfMonth, ...Array(7 - now.set('date', now.daysInMonth()).get('day')).fill(<div className={props.month__days__inner}></div>)]
   }

   for (let i = 0; i < weekday.length; i++) {
      weekday[i] = dayjs().day(i + 1).format('dd');
   }

   // console.log(daysOfMonth.map((day) => day))
   // let array = daysOfMonth
   // let size = 7;
   // let subarray = [];
   // for (let i = 0; i < Math.ceil(array.length / size); i++) {
   //    subarray[i] = array.slice((i * size), (i * size) + size);
   // }
   // console.log(subarray);

   return (

      <div className={props.month__container}>

         <div className={props.month__inner}>

            <div className={props.month__name}>
               {
                  props.inndexOfMonth !== undefined
                     ? nameOfMonth
                     : data.now.format('MMMM')
               }
            </div>

            <div className={props.month__dayOfWeek}>
               {
                  weekday.map((weekday) => <div className={props.month__dayOfWeek__inner}>{weekday}</div>)
               }
            </div>

            <div className={props.month__days}>
               {
                  daysOfMonth.map((day) => day)
               }
            </div>

         </div>

      </div>

      // <div className={props.month}>

      //    <div className={props.month__name}>
      //       <div className={props.month__nameOfMonth}>
      //          {
      //             props.inndexOfMonth !== undefined
      //                ? nameOfMonth
      //                : data.now.format('MMMM')
      //          }
      //       </div>
      //    </div>

      //    <div className={props.month__weekday}>
      //       {
      //          weekday.map((weekday) => <div className={props.month__weekday__inner}>{weekday}</div>)
      //       }
      //    </div>

      //    <div className={props.month__days__calendar}>
      //       {
      //          daysOfMonth.map((day) => day)
      //       }
      //    </div>

      // </div>
   );
}

