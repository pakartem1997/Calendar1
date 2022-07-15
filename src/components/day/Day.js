import React from 'react';
import * as dayjs from 'dayjs';
import * as isLeapYear from 'dayjs/plugin/isLeapYear';
import 'dayjs/locale/ru';

export const Day = (props) => {

   let now = dayjs();
   now = dayjs().year(2022);
   now = now.startOf('year');

   return (
      <div className={props.className}>
         {
            now.add(props.indexOfDay, 'day').format('D')
         }
      </div>
   );
}