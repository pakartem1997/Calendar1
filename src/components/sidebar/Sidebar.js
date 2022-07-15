

import './Sidebar.css';
import { Month } from '../month/Month';
import { useContext } from "react";
import { Context } from "../utils/context";

export const Sidebar = (props) => {

   const [data, setdata] = useContext(Context);

   return <div className={props.calendar__sidebar}>
      <div className='header__s'>
         <button className="header__s-l" onClick={() => setdata({ ...data, now: data.now.add(-1, data.mode) })}></button>
         <div className="header__centre__s">
            {
               data.now.format('MMMM YYYY')
            }
         </div>
         <button className="header__s-r" onClick={() => setdata({ ...data, now: data.now.add(1, data.mode) })}></button>
      </div>
      <Month
         events={props.events}
         month__container="month__container"
         month__inner="month__inner__s"
         month__name="month__name__s"
         month__dayOfWeek="month__dayOfWeek"
         month__dayOfWeek__inner="month__dayOfWeek__inner"
         month__days="month__days"
         month__days__inner="month__days__inner"
         today="today"
      />
      <button className='button__s'>
         Создать
      </button>
   </div>
}