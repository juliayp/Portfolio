import { useEffect, useState } from 'react'
import { About } from './components/About'
import { Approach } from './components/Approach'
import { ClientVoice } from './components/ClientVoice'
import { Contact } from './components/Contact'
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
      <Hero language={language} onLanguageChange={setLanguage}>
        <About language={language} />
        <Approach language={language} />
        <Work language={language} />
        <ClientVoice language={language} />
        <Contact language={language} />
      </Hero>
    </>
  )
}

export default App
