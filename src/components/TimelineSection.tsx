
import { Calendar } from 'lucide-react';

const TimelineSection = () => {
  const schedule = [
    {
      day: "Day 1 - March 1",
      gradient: "bg-gradient-to-br from-purple-500 via-pink-500 to-red-500",
      events: [
        "Registration & Breakfast",
        "Opening Ceremony", 
        "Keynote: Future of AI",
        "Team Formation & Ideation",
        "Lunch Break",
        "Coding Begins",
        "Mentor Office Hours",
        "Dinner & Networking"
      ]
    },
    {
      day: "Day 2 - March 2",
      gradient: "bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500",
      events: [
        "Breakfast & Coffee",
        "AI/ML Workshop Session",
        "Development Sprint",
        "Lunch Break",
        "Mentorship Rounds",
        "Technical Check-ins",
        "Dinner Break",
        "Final Development Push"
      ]
    },
    {
      day: "Day 3 - March 3",
      gradient: "bg-gradient-to-br from-green-500 via-emerald-500 to-lime-500",
      events: [
        "Final Breakfast",
        "Project Finalization",
        "Code Freeze & Submission",
        "Team Presentations",
        "Judging & Deliberation",
        "Awards Ceremony",
        "Closing & Networking"
      ]
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-gradient-to-b from-white to-manthan-lavender/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-mono font-bold text-4xl lg:text-5xl text-manthan-deep-violet mb-6">
            Event Timeline
          </h2>
          <p className="font-sans text-lg text-manthan-dark-text max-w-3xl mx-auto">
            Follow our structured timeline to make the most of your Manthan AI Hackathon experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {schedule.map((day, dayIndex) => (
            <div 
              key={day.day}
              className="relative overflow-hidden rounded-2xl hover:shadow-2xl transition-all duration-300 animate-fade-in group hover:scale-105"
              style={{animationDelay: `${dayIndex * 0.2}s`}}
            >
              {/* Gradient Background */}
              <div className={`${day.gradient} p-6 relative`}>
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/20"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-6">
                    <Calendar className="w-8 h-8 text-white mr-3" />
                    <h3 className="font-mono font-bold text-xl text-white">
                      {day.day}
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    {day.events.map((event, eventIndex) => (
                      <div 
                        key={eventIndex}
                        className="flex items-start space-x-3 text-left"
                      >
                        <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                        <p className="font-sans text-white leading-relaxed font-medium">
                          {event}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
