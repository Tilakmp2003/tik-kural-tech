import { AlertCircle, Zap, TrendingUp } from "lucide-react";
import solutionImage from "@/assets/solution-tablet.jpg";
import proofImage from "@/assets/proof-happy.jpg";

export const StoryPanels = () => {
  const panels = [
    {
      label: "முன்பு",
      labelEn: "Before",
      icon: AlertCircle,
      title: "Manual bills, lost sales",
      description: "Paper receipts get lost, inventory is guesswork, and sales tracking happens in notebooks.",
      color: "text-destructive",
      bgColor: "bg-destructive/10",
    },
    {
      label: "இப்போது",
      labelEn: "Now",
      icon: Zap,
      title: "One app: Print, WhatsApp bill, close the day",
      description: "2-tap billing with GST invoices, thermal printing, and real-time inventory sync — even offline.",
      color: "text-primary",
      bgColor: "bg-primary/10",
      image: solutionImage,
    },
    {
      label: "எதிர்காலம்",
      labelEn: "Results",
      icon: TrendingUp,
      title: "More sales, less stress",
      description: "Shop owners save 2+ hours daily, reduce billing errors by 95%, and never miss a sale.",
      color: "text-accent",
      bgColor: "bg-accent/10",
      image: proofImage,
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Your shop, <span className="text-primary">simplified</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how Tikpick transforms daily operations for small businesses across Tamil Nadu
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {panels.map((panel, index) => (
            <div
              key={index}
              className="panel-card p-8 space-y-6 fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="space-y-3">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${panel.bgColor}`}>
                  <panel.icon className={`h-5 w-5 ${panel.color}`} />
                  <span className="font-semibold text-sm">
                    <span className="tamil-text">{panel.label}</span> • {panel.labelEn}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold leading-tight">
                  {panel.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {panel.description}
                </p>
              </div>

              {panel.image && (
                <div className="rounded-xl overflow-hidden shadow-lg mt-6">
                  <img 
                    src={panel.image} 
                    alt={panel.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="cta-primary px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-2 hover:gap-4 transition-all">
            Get your shop online — Book demo
            <span className="tamil-text">இப்போது முயற்சி செய்யுங்கள்</span>
          </button>
        </div>
      </div>
    </section>
  );
};
