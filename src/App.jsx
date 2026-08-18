import { useEffect, useState } from 'react'
import { Hero } from './components/Hero'
import { Work } from './components/Work'
import { translations } from './data/translations'

function App() {
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    document.documentElement.lang = translations[language].documentLanguage
  }, [language])

  return (
    <>
      <Hero language={language} onLanguageChange={setLanguage} />
      <Work language={language} />
    </>
  )
}

export default App
