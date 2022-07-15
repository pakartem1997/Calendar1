import React from 'react';
import { Month } from '../month/Month';
import { Day } from '../day/Day';
import { Week } from '../week/Week';
import { Context } from "../utils/context";
import { useContext } from "react";
import { Sidebar } from "../sidebar/Sidebar"
import { MonthOne } from '../MonthOne/MonthOne';
import './Calendar.css'

export const Calendar = (props) => {

   // if (props.events) {
   //    console.log('a', props.events[0].title);
   // }

   const [data, setdata] = useContext(Context);

   if (props.mode === 'year') {
      return <div className='calendar__container'>
         <Sidebar calendar__sidebar='calendar__sidebar' />
         <div className='month-container'>
            {
               [...Array(12)].map((item, index) =>
                  <Month
                     inndexOfMonth={index}
                     month="month"
                     month__container="month__container"
                     month__inner="month__inner"
                     month__name="month__name"
                     month__dayOfWeek="month__dayOfWeek"
                     month__dayOfWeek__inner="month__dayOfWeek__inner"
                     month__days="month__days"
                     month__days__inner="month__days__inner"
                     today="today"
                  />)
            }
         </div>
      </div>
   } else if (props.mode === 'month') {
      return <div className='calendar__container'>
         <Sidebar calendar__sidebar='calendar__sidebar' />
         <Month
            events={props.events}
            month__container="month__container__one"
            month__inner="month__inner__one"
            month__name="month__name__one"
            month__dayOfWeek="month__dayOfWeek__one"
            month__dayOfWeek__inner="month__dayOfWeek__inner__one"
            month__days="month__days__one"
            month__days__inner="month__days__inner__one"
            today="today"
         />
      </div>
   } else if (props.mode === 'week') {
      return <div className='calendar__container'>
         <Sidebar calendar__sidebar='calendar__sidebar' />
         <Week />
      </div>
   } else if (props.mode === 'day') {
      return <div className='calendar__container'>
         <Sidebar calendar__sidebar='calendar__sidebar' />
         <div className='container__day'>
            <Day
               className="dayInCalendar"
               indexOfDay={data.now.date() - 1}
            />
            <div className='dd'>
               {
                  data.now.format('dd')
               }
            </div>
            {
               [...Array(24)].map((item, index) => <div className='dayTime'>
                  <div></div>
                  <div></div>
               </div>)
            }
         </div>
      </div>
   }
}