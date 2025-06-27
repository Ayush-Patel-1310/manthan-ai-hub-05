
import { Calendar, Clock } from 'lucide-react';

const TimelineSection = () => {
  const schedule = [
    {
      day: "Day 1 - March 1",
      events: [
        { time: "09:00", activity: "Registration & Breakfast" },
        { time: "10:00", activity: "Opening Ceremony" },
        { time: "11:00", activity: "Keynote: Future of AI" },
        { time: "12:00", activity: "Team Formation & Ideation" },
        { time: "13:00", activity: "Lunch Break" },
        { time: "14:00", activity: "Coding Begins" },
        { time: "16:00", activity: "Mentor Office Hours" },
        { time: "20:00", activity: "Dinner & Networking" }
      ]
    },
    {
      day: "Day 2 - March 2", 
      events: [
        { time: "09:00", activity: "Breakfast & Coffee" },
        { time: "10:00", activity: "AI/ML Workshop Session" },
        { time: "11:00", activity: "Development Sprint" },
        { time: "13:00", activity: "Lunch Break" },
        { time: "14:00", activity: "Mentorship Rounds" },
        { time: "16:00", activity: "Technical Check-ins" },
        { time: "18:00", activity: "Dinner Break" },
        { time: "20:00", activity: "Final Development Push" }
      ]
    },
    {
      day: "Day 3 - March 3",
      events: [
        { time: "09:00", activity: "Final Breakfast" },
        { time: "10:00", activity: "Project Finalization" },
        { time: "11:00", activity: "Code Freeze & Submission" },
        { time: "13:00", activity: "Team Presentations" },
        { time: "15:00", activity: "Judging & Deliberation" },
        { time: "17:00", activity: "Awards Ceremony" },
        { time: "18:00", activity: "Closing & Networking" }
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
              className="bg-gray-800 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 animate-fade-in"
              style={{animationDelay: `${dayIndex * 0.2}s`}}
            >
              <div className="flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6 text-manthan-lavender mr-3" />
                <h3 className="font-mono font-bold text-xl text-white">
                  {day.day}
                </h3>
              </div>
              
              <div className="space-y-4">
                {day.events.map((event, eventIndex) => (
                  <div 
                    key={eventIndex}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex items-center space-x-2 min-w-[80px]">
                      <Clock className="w-4 h-4 text-manthan-lavender" />
                      <span className="font-mono text-sm text-manthan-lavender font-medium">
                        {event.time}
                      </span>
                    </div>
                    <p className="font-sans text-white text-sm leading-relaxed">
                      {event.activity}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
