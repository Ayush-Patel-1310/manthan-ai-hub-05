
import { Calendar } from 'lucide-react';

const TimelineSection = () => {
  const schedule = [
    {
      day: "Day 1 - March 1",
      events: [
        "09:00 - Registration & Breakfast",
        "10:00 - Opening Ceremony", 
        "11:00 - Keynote: Future of AI",
        "12:00 - Team Formation & Ideation",
        "13:00 - Lunch Break",
        "14:00 - Coding Begins",
        "16:00 - Mentor Office Hours",
        "20:00 - Dinner & Networking"
      ]
    },
    {
      day: "Day 2 - March 2",
      events: [
        "08:00 - Breakfast & Coffee",
        "09:00 - AI/ML Workshop Session",
        "11:00 - Development Sprint",
        "13:00 - Lunch Break",
        "14:00 - Mentorship Rounds",
        "16:00 - Technical Check-ins",
        "18:00 - Dinner Break",
        "20:00 - Final Development Push"
      ]
    },
    {
      day: "Day 3 - March 3",
      events: [
        "08:00 - Final Breakfast",
        "09:00 - Project Finalization",
        "10:00 - Code Freeze & Submission",
        "11:00 - Team Presentations",
        "14:00 - Judging & Deliberation",
        "16:00 - Awards Ceremony",
        "17:00 - Closing & Networking"
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
              className="bg-white border-2 border-manthan-lavender/30 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 animate-fade-in group hover:scale-105"
              style={{animationDelay: `${dayIndex * 0.2}s`}}
            >
              <div className="flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8 text-manthan-violet mr-3" />
                <h3 className="font-mono font-bold text-xl text-manthan-deep-violet">
                  {day.day}
                </h3>
              </div>
              
              <div className="space-y-3">
                {day.events.map((event, eventIndex) => (
                  <div 
                    key={eventIndex}
                    className="flex items-start space-x-3 text-left"
                  >
                    <div className="w-2 h-2 bg-manthan-violet rounded-full mt-2 flex-shrink-0"></div>
                    <p className="font-sans text-manthan-dark-text leading-relaxed">
                      {event}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-white rounded-full px-8 py-4 border-2 border-manthan-lavender/30 shadow-lg">
            <Calendar className="w-6 h-6 text-manthan-violet mr-3" />
            <span className="font-mono font-bold text-manthan-deep-violet text-lg">
              Total Duration: 48 Hours of Innovation
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
