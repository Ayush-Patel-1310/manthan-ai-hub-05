
import { Calendar, Clock, Coffee, Code, Flag, Trophy, Users, Presentation } from 'lucide-react';

const ScheduleSection = () => {
  const schedule = [
    {
      day: "Day 1 - Friday, Dec 15",
      events: [
        {
          time: "6:00 PM",
          title: "Registration & Check-in",
          description: "Welcome reception, team formation, and badge collection",
          icon: Users,
          type: "registration"
        },
        {
          time: "7:00 PM",
          title: "Opening Ceremony",
          description: "Welcome address, rules explanation, and problem statement reveal",
          icon: Flag,
          type: "ceremony"
        },
        {
          time: "8:00 PM",
          title: "Dinner & Networking",
          description: "Meet fellow participants and mentors over dinner",
          icon: Coffee,
          type: "break"
        },
        {
          time: "9:00 PM",
          title: "Hacking Begins!",
          description: "Teams start working on their AI solutions",
          icon: Code,
          type: "coding"
        }
      ]
    },
    {
      day: "Day 2 - Saturday, Dec 16",
      events: [
        {
          time: "12:00 AM",
          title: "Midnight Snacks",
          description: "Fuel up for the late-night coding sessions",
          icon: Coffee,
          type: "break"
        },
        {
          time: "8:00 AM",
          title: "Breakfast",
          description: "Start your day with energy and coffee",
          icon: Coffee,
          type: "break"
        },
        {
          time: "10:00 AM",
          title: "AI/ML Workshop",
          description: "Advanced techniques in machine learning and AI implementation",
          icon: Code,
          type: "workshop"
        },
        {
          time: "12:00 PM",
          title: "Lunch Break",
          description: "Recharge with a hearty meal",
          icon: Coffee,
          type: "break"
        },
        {
          time: "2:00 PM",
          title: "Mentorship Sessions",
          description: "One-on-one guidance from industry experts",
          icon: Users,
          type: "workshop"
        },
        {
          time: "6:00 PM",
          title: "Dinner",
          description: "Evening meal and team bonding",
          icon: Coffee,
          type: "break"
        },
        {
          time: "8:00 PM",
          title: "Final Sprint",
          description: "Last chance to polish your AI solution",
          icon: Code,
          type: "coding"
        }
      ]
    },
    {
      day: "Day 3 - Sunday, Dec 17",
      events: [
        {
          time: "8:00 AM",
          title: "Final Breakfast",
          description: "Last meal before presentations",
          icon: Coffee,
          type: "break"
        },
        {
          time: "10:00 AM",
          title: "Code Freeze",
          description: "All development must stop, prepare presentations",
          icon: Clock,
          type: "deadline"
        },
        {
          time: "11:00 AM",
          title: "Team Presentations",
          description: "5-minute pitches to judges panel",
          icon: Presentation,
          type: "presentation"
        },
        {
          time: "2:00 PM",
          title: "Judging & Deliberation",
          description: "Judges evaluate projects and decide winners",
          icon: Trophy,
          type: "judging"
        },
        {
          time: "4:00 PM",
          title: "Awards Ceremony",
          description: "Winner announcements and prize distribution",
          icon: Trophy,
          type: "ceremony"
        },
        {
          time: "5:00 PM",
          title: "Closing & Networking",
          description: "Final networking and farewell",
          icon: Users,
          type: "networking"
        }
      ]
    }
  ];

  const getEventColor = (type: string) => {
    switch (type) {
      case 'registration': return 'bg-blue-500/10 border-blue-500/30 text-blue-700';
      case 'ceremony': return 'bg-manthan-violet/10 border-manthan-violet/30 text-manthan-deep-violet';
      case 'break': return 'bg-green-500/10 border-green-500/30 text-green-700';
      case 'coding': return 'bg-red-500/10 border-red-500/30 text-red-700';
      case 'workshop': return 'bg-yellow-500/10 border-yellow-500/30 text-yellow-700';
      case 'presentation': return 'bg-purple-500/10 border-purple-500/30 text-purple-700';
      case 'deadline': return 'bg-orange-500/10 border-orange-500/30 text-orange-700';
      case 'judging': return 'bg-indigo-500/10 border-indigo-500/30 text-indigo-700';
      case 'networking': return 'bg-teal-500/10 border-teal-500/30 text-teal-700';
      default: return 'bg-gray-500/10 border-gray-500/30 text-gray-700';
    }
  };

  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-mono font-bold text-4xl lg:text-5xl text-manthan-deep-violet mb-6">
            48-Hour Schedule
          </h2>
          <p className="font-sans text-lg text-manthan-dark-text max-w-3xl mx-auto">
            A carefully crafted timeline to maximize your hackathon experience, from ideation to implementation to presentation.
          </p>
        </div>

        <div className="space-y-12">
          {schedule.map((day, dayIndex) => (
            <div key={day.day} className="animate-fade-in" style={{animationDelay: `${dayIndex * 0.2}s`}}>
              <h3 className="font-mono font-bold text-2xl text-manthan-deep-violet mb-6 flex items-center">
                <Calendar className="w-6 h-6 mr-3 text-manthan-violet" />
                {day.day}
              </h3>
              
              <div className="grid gap-4">
                {day.events.map((event, eventIndex) => (
                  <div 
                    key={eventIndex}
                    className={`p-6 rounded-xl border-2 ${getEventColor(event.type)} hover:shadow-lg transition-all duration-300`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                          <event.icon className="w-6 h-6" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h4 className="font-mono font-semibold text-lg">
                            {event.title}
                          </h4>
                          <span className="font-mono text-sm font-medium bg-white/70 px-3 py-1 rounded-full">
                            {event.time}
                          </span>
                        </div>
                        <p className="font-sans text-manthan-dark-text">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-manthan-lavender/20 to-manthan-violet/20 rounded-2xl p-8 text-center">
          <h3 className="font-mono font-bold text-2xl text-manthan-deep-violet mb-4">
            Important Notes
          </h3>
          <ul className="font-sans text-manthan-dark-text space-y-2 max-w-2xl mx-auto">
            <li>• All meals and snacks are provided throughout the event</li>
            <li>• Mentors will be available 24/7 for guidance and support</li>
            <li>• Presentation time limit is strictly 5 minutes + 2 minutes Q&A</li>
            <li>• Code must be submitted before the 10:00 AM deadline on Sunday</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
