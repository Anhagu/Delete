import React from 'react'
import Top from './Top'
import AdPage from './AdPage'
import Calendar from './Calendar'
import SettingFiled from './SettingFiled'
import Footer from './Footer'
import MainLeagueList from './MainLeagueList'
import NoTeam from './NoTeam'


export default function Team() {

  const notices = [
    {num:1, title: '첫번째', contents: '첫번째'},
    {num:2, title: '두번째', contents: '두번째'},
    {num:3, title: '세번째', contents: '세번째'},
    {num:4, title: '네번째', contents: '네번째'},
    {num:5, title: '다섯번째', contents: '다섯번째'},
  ]
  return (
    <div className='main'>
        <Top />
        <AdPage />
        <Calendar />
        <SettingFiled />
        {notices.map((notice) =>(
          <MainLeagueList num={notice.num} title={notice.title} content={notice.contents} />
        ))}

        <NoTeam  />
        {/* <Footer /> */}
    </div>
  )
}

