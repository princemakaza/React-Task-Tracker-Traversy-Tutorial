import React from 'react'
import Button from './Button'

const Header = ({onShowAdd, showAdd}) => {
    const title = "Task Tracker"

  return (
    <header className='header'>
        <h1>
            {title}
        </h1>
{   Location.pathname==='/'&&      (<Button  color={showAdd ? 'red':'green'} text={showAdd ? 'Close':'Add'} onClick={onShowAdd} />)
}        
    </header>
  )
}

export default Header