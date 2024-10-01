import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

export default function Calendar() {

    // 선택한 날짜
    const [value, setValue] = useState(dayjs(new Date()));
    // 선택한 일
    const [today, setToday] = useState(value.date()); 
    // 선택한 요일
    const [todayWeek, setTodayWeek] = useState(value.day());
    // 선택한 달의 마지막
    const [lastDay, setLastDay] = useState(value.daysInMonth());
    // 날짜 목록
    const [dayList, setDayList] = useState([]);
    // 요일 목록
    const [weekList, setWeekList] = useState([]);


    // 기준 날짜 계산
    const getAllDate = (today, lastDay) => {
        let dates = [];
        dates[0] = today;
        for(let i = 1; i <= 6; i++) {
            today++;
            if(today > lastDay) {
                today = 1;
            }
            dates[i] = today;
        // 확인용 console.log(dates[i].getDay());
        }  
        return dates;
    };

    // 요일 계산
    const getAllWeek = (todayWeek) => {
        const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; 
        const weekList = []; 

        weekList[0] = week[todayWeek];

        for (let i  = 1; i <= 6; i ++){
            todayWeek++;
            if(todayWeek > 6){
                todayWeek = 0;
            }
            weekList[i] = week[todayWeek];
        }
        return weekList;
    };

    // 날짜, 요일 계산 후 상태 저장
    useEffect(() => {
        setDayList(getAllDate(today, lastDay));
        setWeekList(getAllWeek(todayWeek));
    }, [today, lastDay, todayWeek]);

    // 날짜 선택 시 기준 날짜 변경
    const handleDateChange = (newValue) => {
        setValue(newValue);
        setToday(newValue.date());
        setTodayWeek(newValue.day());
        setLastDay(newValue.daysInMonth());
    }

    // 날짜, 요일 결합
    const calendarData = dayList.map((day, index) => ({
        week: weekList[index],
        day: day,
    }));

    const weekRef = useRef(null);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <CalendarContainer compoments={['DatePicker']}>
                <YearMonthList>
                    <DatePicker 
                        label="날짜선택"
                        value={value}
                        onChange={handleDateChange}/>
                </YearMonthList>

                <DayList>
                    <DayListContainer>
                        {calendarData.map((calendar, index) => (
                        <DayListSector key={index}>
                            <div
                                className={`week ${calendar.week === 'Sun' ? 'Sun' : ''} ${calendar.week === 'Sat' ? 'Sat' : ''}`}
                                ref={weekRef}
                            >
                                {calendar.week}
                            </div>
                            <Day>{calendar.day}</Day>
                        </DayListSector>
                    ))}
                    </DayListContainer>
                </DayList>
            </CalendarContainer>
        </LocalizationProvider>
    );
}

const CalendarContainer = styled.div`
    position: relative;
    top:30px;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 200px;
    width: 100%;
    margin: 0 auto;
    overflow: initial;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;

    @media (max-width: 380px){
        height: 120px;
        width: 100%;
    }
`;

const YearMonthList = styled.div`
    position: relative;
    top: 10px;
`;

const DayList = styled.div`
    position: relative;
    width: 100%;
    height: 3.5rem;
    font-size: 1.4rem;
    color: #005096;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media (max-width: 390px) {
        font-size: 1rem;
        top: 10px;
    }
`;

const DayListContainer = styled.div`    
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

`

const DayListSector = styled.div`
    width: 40px;
    height: 70px;
    justify-content: center;
    align-items: center;
    text-align: center;
    float: left;
    margin-left: 4em;
    cursor: pointer;
    width: 70px;
    height: 110px;
    border-radius: 40px;
    padding-top: 40px;

    @media (max-width: 390px) {
        width: 50px;
        height: 30px;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 10px;
        margin: 0 auto;
    }
`;

const Day = styled.text`
    font-weight: bold;
`;

// const CalendarIconContainer = styled.div`
//     align-items: center;
//     justify-content: center;
//     position: absolute;
//     width: 150px;
//     height: 100px;
//     font-style: bold;
//     cursor: pointer;
//     color: #353535;    
// `;

// const CalendarIconText = styled.text`
//     font-size: 23px;
// `;