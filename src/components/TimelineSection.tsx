import { Calendar, Clock } from "lucide-react";

const TimelineSection = () => {
  const schedule = [
    {
      day: "Pre Hackathon Phase",
      events: [
        { time: "19th July", activity: "Slot Booking Start" },
        { time: "19th July", activity: "Submission Start" },
        { time: "23rd Aug", activity: "Submission End" },
        { time: "28th Aug", activity: "Shortlisted teams Announcement" },
      ],
    },
    {
      day: "Day 1 - August 30",
      events: [
        { time: "07:45", activity: "Reporting Time" },
        { time: "08:00", activity: "Breakfast & Coffee" },
        { time: "09:00", activity: "Key Notes and Rules" },
        { time: "09:30", activity: "Small Event (Team Intro)" },
        { time: "10:00", activity: "Development starts" },
        { time: "13:00", activity: "Lunch" },
        { time: "14:30", activity: "Resume Development" },
        { time: "16:30", activity: "High-Tea" },
        { time: "20:00", activity: "Dinner Break" },
        { time: "21:30", activity: "Final Development Push" },
      ],
    },
    {
      day: "Day 2 - August 31",
      events: [
        { time: "00:00", activity: "Rapid Fire" },
        { time: "02:00", activity: "Small Event + High tea" },
        { time: "06:00", activity: "Small Exercise (Yoga)" },
        { time: "07:30", activity: "Stop Development" },
        { time: "08:00", activity: "Preparation for Presentation " },
        { time: "08:30", activity: "Breakfast & Break" },
        { time: "10:00", activity: "Presentation, Demo and Submission" },
        { time: "12:30", activity: "Lunch" },
        { time: "13:30", activity: "Small Event" },
        { time: "14:00", activity: "Prize ceremony" },
        { time: "15:30", activity: "Closing Notes" },
        { time: "16:00", activity: "Networking" },
      ],
    },
  ];

  return (
    <section
      id="timeline"
      className="py-20 bg-gradient-to-b from-white to-manthan-lavender/10"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-mono font-bold text-4xl lg:text-5xl text-manthan-deep-violet mb-6">
            Event Timeline
          </h2>
          <p className="font-sans text-lg text-manthan-dark-text max-w-3xl mx-auto">
            Follow our structured timeline to make the most of your Manthan AI
            Hackathon experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {schedule.map((day, dayIndex) => (
            <div
              key={day.day}
              className="bg-gray-800 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${dayIndex * 0.2}s` }}
            >
              <div className="flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6 text-manthan-lavender mr-3" />
                <h3 className="font-mono font-bold text-xl text-white">
                  {day.day}
                </h3>
              </div>

              <div className="space-y-4">
                {day.events.map((event, eventIndex) => (
                  <div key={eventIndex} className="flex items-start space-x-4">
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
