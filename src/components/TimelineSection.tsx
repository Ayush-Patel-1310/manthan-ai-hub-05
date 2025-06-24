
import { Calendar, Clock, Trophy } from 'lucide-react';

const TimelineSection = () => {
  const phases = [
    {
      phase: "Day 1 - March 1",
      title: "Registration & Kickoff",
      timeRange: "09:00 - 20:00",
      events: [
        { time: "09:00", event: "Registration & Breakfast" },
        { time: "10:00", event: "Opening Ceremony" },
        { time: "11:00", event: "Keynote: Future of AI" },
        { time: "12:00", event: "Team Formation & Ideation" },
        { time: "13:00", event: "Lunch Break" },
        { time: "14:00", event: "Coding Begins" },
        { time: "16:00", event: "Mentor Office Hours" },
        { time: "20:00", event: "Dinner & Networking" }
      ],
      bgColor: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/30"
    },
    {
      phase: "Day 2 - March 2", 
      title: "Development Phase",
      timeRange: "09:00 - 20:00",
      events: [
        { time: "09:00", event: "Breakfast" },
        { time: "10:00", event: "Development Continues" },
        { time: "12:00", event: "Mid-point Check-in" },
        { time: "13:00", event: "Lunch Break" },
        { time: "14:00", event: "Intensive Development" },
        { time: "16:00", event: "Technical Workshops" },
        { time: "18:00", event: "Progress Presentations" },
        { time: "20:00", event: "Dinner & Team Huddles" }
      ],
      bgColor: "from-purple-500/10 to-pink-500/10", 
      borderColor: "border-purple-500/30"
    },
    {
      phase: "Day 3 - March 3",
      title: "Finale & Awards",
      timeRange: "09:00 - 18:30",
      events: [
        { time: "09:00", event: "Breakfast" },
        { time: "10:00", event: "Final Development Sprint" },
        { time: "12:00", event: "Project Submission Deadline" },
        { time: "13:00", event: "Lunch Break" },
        { time: "14:00", event: "Final Presentations" },
        { time: "16:00", event: "Judging & Deliberation" },
        { time: "17:30", event: "Awards Ceremony" },
        { time: "18:30", event: "Closing & Networking" }
      ],
      bgColor: "from-emerald-500/10 to-teal-500/10",
      borderColor: "border-emerald-500/30"
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-mono font-bold text-4xl lg:text-5xl text-white mb-6">
            Full Schedule
          </h2>
          <p className="font-sans text-lg text-gray-300 max-w-3xl mx-auto">
            Detailed breakdown of all three hackathon days
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {phases.map((phase, phaseIndex) => (
            <div 
              key={phaseIndex}
              className={`bg-gradient-to-b ${phase.bgColor} backdrop-blur-sm rounded-2xl border-2 ${phase.borderColor} p-6 hover:scale-105 transition-all duration-300 animate-fade-in`}
              style={{animationDelay: `${phaseIndex * 0.2}s`}}
            >
              {/* Phase Header */}
              <div className="text-center mb-6">
                <div className="flex items-center justify-center mb-3">
                  <Calendar className="w-6 h-6 text-cyan-400 mr-2" />
                  <h3 className="font-mono font-bold text-xl text-cyan-400">
                    {phase.phase}
                  </h3>
                </div>
                <h4 className="font-sans text-lg font-semibold text-white mb-2">
                  {phase.title}
                </h4>
                <p className="text-sm text-gray-300">
                  {phase.timeRange}
                </p>
              </div>

              {/* Events List */}
              <div className="space-y-4">
                {phase.events.map((event, eventIndex) => (
                  <div 
                    key={eventIndex}
                    className="flex items-start space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                        <Clock className="w-4 h-4 text-cyan-400" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono text-sm font-medium text-cyan-400">
                          {event.time}
                        </span>
                      </div>
                      <p className="font-sans text-sm text-white">
                        {event.event}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-manthan-violet/20 to-manthan-deep-violet/20 rounded-2xl p-8 border border-manthan-violet/30">
            <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="font-mono font-bold text-2xl text-white mb-4">
              Important Timeline Notes
            </h3>
            <ul className="font-sans text-gray-300 space-y-2 max-w-2xl mx-auto">
              <li>• All meals and refreshments provided throughout the event</li>
              <li>• Mentors available 24/7 for guidance and technical support</li>
              <li>• Final presentation time limit: 5 minutes + 2 minutes Q&A</li>
              <li>• Code submission deadline is strictly enforced at 12:00 PM on Day 3</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
