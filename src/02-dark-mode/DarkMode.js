import { useState, useEffect } from "react"

export default function DarkMode () {
  const [darkMode, setDarkMode] = useState(false)
  const [pageStyle, setPageStyle] = useState('page')

  useEffect(() => {
    if (darkMode) {
      setPageStyle('page dark-mode');
    } else {
      setPageStyle('page')
    }
  }, [darkMode])

  return (
    <div className={pageStyle}>
      <button className='dark-mode-button' onClick={() => setDarkMode(true)}>Dark Mode</button>
      <button className='light-mode-button' onClick={() => setDarkMode(false)}>Light Mode</button>
    </div>
  )
}
