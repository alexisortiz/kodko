import './App.css'
import ContentBody from './Components/ContentBody'
import Header from './Components/header'
import Hero from './Components/Hero'

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <ContentBody />

        <Hero />
      </div>
    </>
  )
}

export default App
