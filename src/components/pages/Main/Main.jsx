import React from 'react'
import Top from './Top'
import Menu from './Menu'
import Team from './Team'
import Notice from './Notice'

export default function Main() {

  const notices = [
    {num:1, title: '첫번째', contents: '첫번째'},
    {num:2, title: '두번째', contents: '두번째'},
    {num:3, title: '세번째', contents: '세번째'},
    {num:4, title: '네번째', contents: '네번째'},
  ]
  return (
    <div className='main'>
        <Top />
        <Menu />
        <Team  />  
        {/* <Notice />  */}
        {notices.map((notice) =>(
          <Notice num={notice.num} title={notice.title} content={notice.contents} />
        ))}
    </div>
  )
}

