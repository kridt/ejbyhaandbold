import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ChevronLeft, ChevronRight, Clock, MapPin, Users,
  Calendar as CalendarIcon, Filter, ArrowRight
} from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

const SchedulePage = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 0, 1)) // January 2025
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [selectedEvent, setSelectedEvent] = useState(null)

  // Sample events
  const events = [
    { id: 1, title: 'Trille Trolle Træning', team: 'trille-trolle', day: 'Tirsdag', time: '16:00-17:00', hall: 'Hal 1', color: 'bg-yellow-400', recurring: true },
    { id: 2, title: 'U8 Træning', team: 'u8', day: 'Tirsdag', time: '16:00-17:00', hall: 'Hal 1', color: 'bg-blue-400', recurring: true },
    { id: 3, title: 'Dame Hold Træning', team: 'dame', day: 'Tirsdag', time: '18:45-20:15', hall: 'Hal 1', color: 'bg-pink-400', recurring: true },
    { id: 4, title: 'Herre Senior Træning', team: 'herre', day: 'Tirsdag', time: '20:30-22:00', hall: 'Hal 1', color: 'bg-green-500', recurring: true },
    { id: 5, title: 'Five a Side', team: 'five-a-side', day: 'Torsdag', time: '19:00-20:00', hall: 'Hal 1', color: 'bg-purple-400', recurring: true },
  ]

  const filters = [
    { id: 'all', label: 'Alle hold', color: 'bg-gray-400' },
    { id: 'trille-trolle', label: 'Trille Trolle', color: 'bg-yellow-400' },
    { id: 'u8', label: 'U8', color: 'bg-blue-400' },
    { id: 'dame', label: 'Dame Hold', color: 'bg-pink-400' },
    { id: 'herre', label: 'Herre Senior', color: 'bg-green-500' },
    { id: 'five-a-side', label: 'Five a Side', color: 'bg-purple-400' },
  ]

  const getDaysInMonth = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDay = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1 // Monday start

    const days = []

    // Previous month days
    for (let i = startingDay - 1; i >= 0; i--) {
      const prevDate = new Date(year, month, -i)
      days.push({ date: prevDate, isCurrentMonth: false })
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ date: new Date(year, month, i), isCurrentMonth: true })
    }

    // Next month days
    const remainingDays = 42 - days.length
    for (let i = 1; i <= remainingDays; i++) {
      days.push({ date: new Date(year, month + 1, i), isCurrentMonth: false })
    }

    return days
  }

  const getEventsForDay = (date) => {
    const dayName = ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'][date.getDay()]
    return events.filter(event => {
      const matchesDay = event.day === dayName
      const matchesFilter = selectedFilter === 'all' || event.team === selectedFilter
      return matchesDay && matchesFilter
    })
  }

  const monthNames = ['Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'December']
  const dayNames = ['Man', 'Tirs', 'Ons', 'Tors', 'Fre', 'Lør', 'Søn']

  const days = getDaysInMonth(currentMonth)
  const today = new Date()

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  const filteredEvents = selectedFilter === 'all'
    ? events
    : events.filter(e => e.team === selectedFilter)

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-[#31702d] via-[#3d8a38] to-[#245522] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-white rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-green-100 text-sm mb-6">
              <CalendarIcon className="w-4 h-4 inline mr-2" />
              Kalender & Træningsplan
            </span>
            <h1 className="heading-lg text-white mb-4">
              Træningskalender
            </h1>
            <p className="text-green-100/80 text-lg max-w-xl mx-auto">
              Se hvornår de forskellige hold træner og planlæg din uge
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calendar */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              {/* Calendar Header */}
              <div className="bg-gradient-to-r from-[#31702d] to-[#3d8a38] p-6 flex items-center justify-between">
                <button
                  onClick={prevMonth}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <h2 className="text-xl font-bold text-white">
                  {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                </h2>
                <button
                  onClick={nextMonth}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Filter Pills */}
              <div className="p-4 border-b border-gray-100 flex items-center gap-2 overflow-x-auto">
                <Filter className="w-4 h-4 text-gray-400 flex-shrink-0" />
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedFilter(filter.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                      selectedFilter === filter.id
                        ? `${filter.color} text-white shadow-md`
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>

              {/* Day Names */}
              <div className="grid grid-cols-7 bg-gray-50">
                {dayNames.map((day) => (
                  <div key={day} className="p-3 text-center text-sm font-semibold text-gray-500">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7">
                {days.map((day, index) => {
                  const dayEvents = getEventsForDay(day.date)
                  const isToday = day.date.toDateString() === today.toDateString()

                  return (
                    <motion.div
                      key={index}
                      whileHover={{ backgroundColor: 'rgba(49, 112, 45, 0.05)' }}
                      className={`min-h-[100px] p-2 border-b border-r border-gray-100 ${
                        !day.isCurrentMonth ? 'bg-gray-50/50' : ''
                      }`}
                    >
                      <div className={`text-sm mb-1 ${
                        !day.isCurrentMonth ? 'text-gray-300' :
                        isToday ? 'w-7 h-7 bg-[#31702d] text-white rounded-full flex items-center justify-center font-bold' :
                        'text-gray-700'
                      }`}>
                        {day.date.getDate()}
                      </div>

                      <div className="space-y-1">
                        {dayEvents.slice(0, 3).map((event) => (
                          <motion.button
                            key={event.id}
                            whileHover={{ scale: 1.02 }}
                            onClick={() => setSelectedEvent(event)}
                            className={`w-full text-left px-2 py-1 rounded text-xs text-white truncate ${event.color}`}
                          >
                            {event.time.split('-')[0]}
                          </motion.button>
                        ))}
                        {dayEvents.length > 3 && (
                          <div className="text-xs text-gray-400 px-2">
                            +{dayEvents.length - 3} mere
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Today's Schedule */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl shadow-xl p-6"
            >
              <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#31702d]" />
                Ugentlig træningsplan
              </h3>

              <div className="space-y-4">
                {filteredEvents.map((event) => (
                  <motion.div
                    key={event.id}
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors"
                    onClick={() => setSelectedEvent(event)}
                  >
                    <div className={`w-3 h-3 rounded-full mt-1.5 ${event.color}`} />
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{event.title}</p>
                      <p className="text-sm text-gray-500">{event.day} • {event.time}</p>
                      <p className="text-xs text-gray-400">{event.hall}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-[#31702d] to-[#245522] rounded-2xl shadow-xl p-6 text-white"
            >
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Træningssted
              </h3>
              <p className="text-green-100 mb-4">
                Ejbyhallen<br />
                Skovvang 4<br />
                4623 Lille Skensved
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-green-200 hover:text-white transition-colors"
              >
                Vis på kort
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-6"
            >
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Vil du med på holdet?
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                Tilmeld dig i dag og kom med til næste træning!
              </p>
              <Link
                to="/tilmelding"
                className="w-full btn-primary py-3 rounded-xl text-white font-medium flex items-center justify-center gap-2"
              >
                Tilmeld dig
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Event Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8"
            >
              <div className={`w-12 h-12 rounded-xl ${selectedEvent.color} flex items-center justify-center mb-4`}>
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedEvent.title}</h3>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-600">
                  <CalendarIcon className="w-5 h-5" />
                  <span>{selectedEvent.day}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Clock className="w-5 h-5" />
                  <span>{selectedEvent.time}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin className="w-5 h-5" />
                  <span>Ejbyhallen, {selectedEvent.hall}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <Link
                  to="/tilmelding"
                  className="flex-1 btn-primary py-3 rounded-xl text-white font-medium text-center"
                >
                  Tilmeld
                </Link>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="px-6 py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors"
                >
                  Luk
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default SchedulePage
