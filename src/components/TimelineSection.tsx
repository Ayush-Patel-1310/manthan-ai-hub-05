
import { Calendar, Users, Trophy, Clock } from 'lucide-react';

const TimelineSection = () => {
  const phases = [
    {
      id: 1,
      title: "Registration & Team Formation",
      date: "March 1-25, 2024",
      description: "Register your team, download proposal templates, and prepare your AI solution concept. Form diverse teams of 2-4 members.",
      icon: Users,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      id: 2,
      title: "Hackathon Event",
      date: "March 30-31, 2024", 
      description: "48 hours of intensive development, mentorship sessions, and collaborative innovation. Build your AI solution with expert guidance.",
      icon: Clock,
      color: "from-manthan-violet to-manthan-deep-violet",
      bgColor: "bg-manthan-lavender/20",
      borderColor: "border-manthan-lavender"
    },
    {
      id: 3,
      title: "Judging & Awards",
      date: "April 1, 2024",
      description: "Present your solutions to industry experts, receive feedback, and celebrate outstanding innovations with cash prizes and recognition.",
      icon: Trophy,
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200"
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
          {phases.map((phase, index) => (
            <div 
              key={phase.id}
              className={`${phase.bgColor} ${phase.borderColor} border-2 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 animate-fade-in group hover:scale-105`}
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${phase.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <phase.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="font-mono font-bold text-2xl text-manthan-deep-violet mb-4">
                {phase.title}
              </h3>
              
              <div className="flex items-center justify-center mb-4">
                <Calendar className="w-5 h-5 text-manthan-violet mr-2" />
                <span className="font-mono font-semibold text-manthan-violet">
                  {phase.date}
                </span>
              </div>
              
              <p className="font-sans text-manthan-dark-text leading-relaxed">
                {phase.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-white rounded-full px-8 py-4 border-2 border-manthan-lavender/30 shadow-lg">
            <Clock className="w-6 h-6 text-manthan-violet mr-3" />
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
