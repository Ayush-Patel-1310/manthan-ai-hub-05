
import { Brain, Code, Lightbulb, Rocket, Users, Zap } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Innovation",
      description: "Leverage cutting-edge AI technologies to solve real-world problems and create revolutionary solutions."
    },
    {
      icon: Code,
      title: "48-Hour Challenge",
      description: "Intense coding marathon where teams race against time to build, test, and present their AI projects."
    },
    {
      icon: Users,
      title: "Collaborative Environment",
      description: "Work with like-minded developers, designers, and AI enthusiasts to bring your ideas to life."
    },
    {
      icon: Lightbulb,
      title: "Learning & Growth",
      description: "Expand your AI knowledge through workshops, mentorship, and hands-on experience."
    },
    {
      icon: Rocket,
      title: "Industry Recognition",
      description: "Showcase your project to industry leaders and potentially launch your AI startup."
    },
    {
      icon: Zap,
      title: "Fast-Paced Action",
      description: "Experience the thrill of rapid prototyping and iterative development in an AI context."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-manthan-lavender/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-mono font-bold text-4xl lg:text-5xl text-manthan-deep-violet mb-6">
            About Manthan AI Hackathon
          </h2>
          <p className="font-sans text-lg text-manthan-dark-text max-w-3xl mx-auto">
            Manthan is more than just a hackathon—it's a crucible where artificial intelligence meets human creativity. 
            Over 48 intensive hours, teams will tackle complex AI challenges, push the boundaries of machine learning, 
            and demonstrate how technology can revolutionize industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="p-6 bg-white rounded-xl border border-manthan-lavender/30 hover:border-manthan-violet/50 transition-all duration-300 hover:shadow-lg animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="w-12 h-12 bg-manthan-violet/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-manthan-violet" />
              </div>
              <h3 className="font-mono font-semibold text-xl text-manthan-deep-violet mb-3">
                {feature.title}
              </h3>
              <p className="font-sans text-manthan-dark-text">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-manthan-violet to-manthan-deep-violet rounded-2xl p-8 text-white text-center">
          <h3 className="font-mono font-bold text-2xl mb-4">
            Why AI? Why Now?
          </h3>
          <p className="font-sans text-lg opacity-90 max-w-2xl mx-auto">
            Artificial Intelligence is reshaping every industry—from healthcare and finance to entertainment and education. 
            Manthan provides the perfect platform to explore AI's potential, experiment with cutting-edge tools, 
            and create solutions that could change the world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
