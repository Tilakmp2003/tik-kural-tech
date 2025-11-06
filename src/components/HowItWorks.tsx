import { UserPlus, Settings, Zap } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Register",
      titleTamil: "பதிவு செய்க",
      description: "Quick 5-minute signup with just your phone number and business details.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Settings,
      title: "Set up shop",
      titleTamil: "கடை அமை",
      description: "We help you configure products, pricing, and tax settings — in Tamil or English.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Zap,
      title: "Start billing",
      titleTamil: "பில் தொடங்கு",
      description: "Print bills, track inventory, and manage customers from day one. Offline support included.",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
            Simple Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Get started in <span className="text-primary">3 simple steps</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From signup to your first sale in under 20 minutes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection lines */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-orange-500 opacity-20" style={{ width: '66%', left: '16.5%' }} />
          
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="glass-card p-8 space-y-6 rounded-3xl hover:scale-[1.02] transition-all duration-300">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">{index + 1}</span>
                </div>

                <div className={`w-16 h-16 rounded-2xl ${step.bgColor} flex items-center justify-center`}>
                  <step.icon className={`h-8 w-8 ${step.color}`} />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                  <p className="text-sm tamil-text text-muted-foreground font-medium">{step.titleTamil}</p>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Ready to get started? Book a free personalized demo
          </p>
          <button className="cta-primary px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-2 hover:gap-4 transition-all">
            Schedule Demo
            <span className="tamil-text">இப்போது பதிவு</span>
          </button>
        </div>
      </div>
    </section>
  );
};
