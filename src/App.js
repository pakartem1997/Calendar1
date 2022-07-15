import './App.css';
import './reset.css';

import { Header } from './components/header/Header';
import { Month } from './components/month/Month';
import { Calendar } from './components/calendar/Calendar';
import { useState } from 'react';
import { useEffect } from 'react';
import { Context } from './components/utils/context';

import * as dayjs from 'dayjs';
import * as isLeapYear from 'dayjs/plugin/isLeapYear';
import 'dayjs/locale/ru';

import axios from 'axios';

function App() {

   dayjs.locale('ru')

   var weekYear = require('dayjs/plugin/weekYear') // подключаем плагин weekOfYear
   var weekOfYear = require('dayjs/plugin/weekOfYear')
   var weekday = require('dayjs/plugin/weekday')
   dayjs.extend(weekOfYear)
   dayjs.extend(weekYear)
   dayjs.extend(weekday)


   const [data, setdata] = useState({
      mode: "month",
      now: dayjs(),
   });

   const [events, setEvets] = useState();

   // useEffect(() => {
   //    fetch('http://localhost:3000/events')
   //       .then(res => res.json())
   //       .then(res => {
   //          setEvets(res)
   //          console.log("res", res);
   //       })
   // }, [data.now]);

   // console.log("day", dayjs.unix(1657558800).format('D'));

   // let startMonth = dayjs().set('month', 6).set('year', 2022).startOf('month');
   // let endMonth = startMonth.add(1, 'month');

   // const registration = async () => {
   //    try {
   //       const response = await axios.post(
   //          "http://plannerrestapi.herokuapp.com/api/auth/signup",
   //          {
   //             "password": "A12rtem3",
   //             "email": "Artem",
   //             "login": "happy.pak@mail.ru"
   //          }
   //       );

   //       alert(response.data.message || "отправлено");
   //    } catch (e) {
   //       alert(e.response.data.message);
   //    }
   // };

   // registration();

   // console.log('s', startMonth.unix());
   // console.log('e', endMonth.unix());
   // console.log('p', events[0].time);


   // if (startMonth.unix() < events[0].time &&  events[0].time < endMonth.unix()) {
   //    console.log("r", dayjs.unix(events[0].time));
   //    console.log("t", events[0].title);
   // } else {
   //    console.log("else")
   // }

   // axios.post("https://jsonplaceholder.typicode.com/posts", {
   //    password: "A12rtem3",
   //    login: "Artem",
   //    email: "happy.pak@mail.ru"
   // })
   //    .then(response => console.log(response.data))
   //    .catch(error => console.log(error));

   // let result = response.json();



   // fetch('http://plannerrestapi.herokuapp.com/api/calendar')
   //    .then(res => res.json())
   //    .then(res => {
   //       setEvets(res)
   //       console.log("Anna", res);
   //    })

   // axios.get("http://localhost:3000/events/1")
   //    .then(response => console.log("response", response.data))

   // fetch("https://jsonplaceholder.typicode.com/posts", {
   //    method: "POST",
   //    body: JSON.stringify({
   //       title: "Title of post",
   //       body: "Post Body"
   //    })
   // })
   //    .then(res => {
   //       if (!response.ok) throw Error(response.statusText);
   //       return response.json();
   //    })
   //    .then(data => console.log(data))
   //    .catch(error => console.log(error));

   return (
      <div className="App">
         {
            console.log("App")
         }
         <div className="container">
            <Context.Provider value={[data, setdata]}>
               <Header />
               <Calendar mode={data.mode} events={events} />
            </Context.Provider>
         </div>
      </div>
   );
}

export default App;
