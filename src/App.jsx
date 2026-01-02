import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import TeamsPage from './pages/TeamsPage'
import SchedulePage from './pages/SchedulePage'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hold" element={<TeamsPage />} />
          <Route path="/kalender" element={<SchedulePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
