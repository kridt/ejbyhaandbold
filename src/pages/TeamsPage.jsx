import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Clock, MapPin, Users, Calendar, Mail, Phone,
  ArrowRight, ChevronRight, Heart, Star
} from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

const TeamsPage = () => {
  const teams = [
    {
      id: 'trille-trolle',
      name: 'Trille Trolle',
      subtitle: 'De alleryngste',
      ages: '3-5 år',
      description: 'Et træningstilbud for de mindste, hvor forældre/bedsteforældre er med børnene på gulvet. Alle aktiviteter tager deres udgangspunkt i små historier fra de to trolles univers.',
      schedule: 'Tirsdag 16:00-17:00',
      location: 'Hal 1',
      startDate: 'Starter 2. september 2025',
      price: '450 kr/år',
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&h=500&fit=crop',
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-gradient-to-br from-yellow-50 to-orange-50',
      features: ['Motorik træning', 'Leg og sjov', 'Forældre deltager', 'Små hold'],
      coaches: [
        { name: 'Line Hansen', role: 'Træner', image: 'https://i.pravatar.cc/150?img=1' },
      ]
    },
    {
      id: 'u8',
      name: 'U8 Hold',
      subtitle: 'Mini håndbold',
      ages: '6-8 år',
      description: 'Her lærer børnene grundlæggende håndboldteknikker gennem leg og sjov. Vi fokuserer på at udvikle motorik, bold- og begejstring.',
      schedule: 'Tirsdag 16:00-17:00',
      location: 'Hal 1',
      startDate: 'Starter 19. august 2025',
      price: '450 kr/år',
      image: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=800&h=500&fit=crop',
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50',
      features: ['Grundteknik', 'Holdspil', 'Kampe', 'Stævner'],
      coaches: [
        { name: 'Thomas Jensen', role: 'Træner', image: 'https://i.pravatar.cc/150?img=3' },
      ]
    },
    {
      id: 'dame',
      name: 'Dame Hold - Cool Ladies',
      subtitle: 'Kvindernes hold',
      ages: 'Senior',
      description: 'Klubben byder alle velkomne - der er plads til både rutinerede, rustne, kvikke, uøvede og alt der imellem. Her mødes glade kvinder til sjov træning.',
      schedule: 'Tirsdag 18:45-20:15',
      location: 'Hal 1',
      startDate: 'Starter 12. august 2025',
      price: '550 kr/år',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=500&fit=crop',
      color: 'from-pink-400 to-rose-500',
      bgColor: 'bg-gradient-to-br from-pink-50 to-rose-50',
      features: ['Alle niveauer', 'Sjov træning', 'Godt sammenhold', 'Kampe'],
      coaches: [
        { name: 'Mette Andersen', role: 'Træner', image: 'https://i.pravatar.cc/150?img=5' },
        { name: 'Peter Nielsen', role: 'Ass. træner', image: 'https://i.pravatar.cc/150?img=8' },
      ]
    },
    {
      id: 'herre',
      name: 'Herre Senior',
      subtitle: 'Herrernes hold',
      ages: 'Senior',
      description: 'Det nye herrehold 2024! Vi søger spillere på alle niveauer til at være med til at bygge holdet op. Kom og vær en del af noget nyt.',
      schedule: 'Tirsdag 20:30-22:00',
      location: 'Hal 1',
      startDate: 'Starter 12. august 2025',
      price: '550 kr/år',
      image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&h=500&fit=crop',
      color: 'from-[#31702d] to-[#4a9e44]',
      bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50',
      features: ['Nyt hold', 'Alle niveauer', 'Kampe', 'Godt fællesskab'],
      coaches: [
        { name: 'Lars Petersen', role: 'Træner', image: 'https://i.pravatar.cc/150?img=11' },
      ]
    },
    {
      id: 'five-a-side',
      name: 'Five a Side',
      subtitle: 'Mix hold',
      ages: 'Voksne (M/K)',
      description: 'Five a side holdet træner hver torsdag på kort bane. Perfekt for dem der vil have en sjov og uforpligtende træning med både mænd og kvinder.',
      schedule: 'Torsdag 19:00-20:00',
      location: 'Hal 1/2',
      startDate: 'Starter 4. september 2025',
      price: '550 kr/år',
      image: 'https://images.unsplash.com/photo-1461896836934-8c9e0d8f5e3a?w=800&h=500&fit=crop',
      color: 'from-purple-400 to-indigo-500',
      bgColor: 'bg-gradient-to-br from-purple-50 to-indigo-50',
      features: ['Mix hold', 'Kort bane', 'Uforpligtende', 'Alle niveauer'],
      coaches: [
        { name: 'Diverse', role: 'Selvorganiseret', image: 'https://i.pravatar.cc/150?img=15' },
      ]
    },
  ]

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#31702d] via-[#3d8a38] to-[#245522] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-green-100 text-sm mb-6">
              Hold & Trænere
            </span>
            <h1 className="heading-xl text-white mb-6">
              Find dit hold
            </h1>
            <p className="text-green-100/80 text-xl max-w-2xl mx-auto">
              Vi tilbyder håndbold for alle aldre - fra de mindste på 3 år til voksne.
              Der er plads til alle uanset niveau.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Teams List */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="space-y-24"
          >
            {teams.map((team, index) => (
              <motion.div
                key={team.id}
                id={team.id}
                variants={fadeInUp}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Image Side */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={team.image}
                      alt={team.name}
                      className="w-full h-[400px] object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${team.color} opacity-30`} />

                    {/* Floating badge */}
                    <div className="absolute top-6 left-6">
                      <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${team.color} text-white font-semibold shadow-lg`}>
                        {team.ages}
                      </div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className={`absolute -bottom-6 ${index % 2 === 1 ? '-right-6' : '-left-6'} w-32 h-32 bg-[#31702d]/10 rounded-2xl -z-10`} />
                </motion.div>

                {/* Content Side */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${team.color} text-white mb-4`}>
                    {team.subtitle}
                  </span>
                  <h2 className="heading-lg text-gray-900 mb-4">{team.name}</h2>
                  <p className="text-gray-600 text-lg mb-6">{team.description}</p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {team.features.map((feature) => (
                      <span
                        key={feature}
                        className={`px-3 py-1 rounded-full text-sm ${team.bgColor} text-gray-700`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Info Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                      <Clock className="w-5 h-5 text-[#31702d]" />
                      <div>
                        <p className="text-xs text-gray-500">Træningstid</p>
                        <p className="font-semibold text-gray-900">{team.schedule}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                      <MapPin className="w-5 h-5 text-[#31702d]" />
                      <div>
                        <p className="text-xs text-gray-500">Sted</p>
                        <p className="font-semibold text-gray-900">{team.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                      <Calendar className="w-5 h-5 text-[#31702d]" />
                      <div>
                        <p className="text-xs text-gray-500">Sæsonstart</p>
                        <p className="font-semibold text-gray-900 text-sm">{team.startDate}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                      <Heart className="w-5 h-5 text-[#31702d]" />
                      <div>
                        <p className="text-xs text-gray-500">Kontingent</p>
                        <p className="font-semibold text-gray-900">{team.price}</p>
                      </div>
                    </div>
                  </div>

                  {/* Coaches */}
                  <div className="mb-8">
                    <p className="text-sm text-gray-500 mb-3">Trænere</p>
                    <div className="flex items-center gap-4">
                      {team.coaches.map((coach) => (
                        <div key={coach.name} className="flex items-center gap-3">
                          <img
                            src={coach.image}
                            alt={coach.name}
                            className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-md"
                          />
                          <div>
                            <p className="font-medium text-gray-900">{coach.name}</p>
                            <p className="text-xs text-gray-500">{coach.role}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    to="/tilmelding"
                    className="inline-flex items-center gap-2 btn-primary px-6 py-3 rounded-full text-white font-medium"
                  >
                    Tilmeld til {team.name}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Support Membership */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#31702d] to-[#245522] rounded-3xl p-12 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-6 bg-white/10 rounded-2xl flex items-center justify-center">
                <Star className="w-8 h-8 text-yellow-400" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Bliv støttemedlem</h2>
              <p className="text-green-100/80 text-lg mb-8 max-w-xl mx-auto">
                Støt klubben uden at spille aktivt. Som støttemedlem er du med til at
                sikre fremtiden for håndbold i Ejby.
              </p>
              <Link
                to="/tilmelding"
                className="inline-flex items-center gap-2 bg-white text-[#31702d] px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-all"
              >
                Bliv støttemedlem
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default TeamsPage
