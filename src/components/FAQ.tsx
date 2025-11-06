import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "Does it work offline?",
      questionTamil: "இணையம் இல்லாமல் வேலை செய்யுமா?",
      answer: "Yes! Our POS system works completely offline. All your sales, inventory updates, and billing happen locally on your device. When you reconnect to the internet, everything syncs automatically to the cloud.",
    },
    {
      question: "Is Tamil language fully supported?",
      questionTamil: "தமிழ் மொழி முழுமையாக ஆதரிக்கப்படுகிறதா?",
      answer: "Absolutely! The entire interface, receipts, reports, and customer support are available in Tamil. You can switch between English and Tamil anytime. Our support team speaks Tamil fluently.",
    },
    {
      question: "How do I print bills?",
      questionTamil: "பில்களை எப்படி அச்சிடுவது?",
      answer: "We support all standard thermal printers (58mm and 80mm). Simply connect via USB or Bluetooth, and you can print GST-compliant bills in Tamil or English. We also support WhatsApp bill sharing if you don't have a printer.",
    },
    {
      question: "What's the pricing?",
      questionTamil: "விலை என்ன?",
      answer: "Our plans start from ₹499/month for small shops. This includes unlimited billing, inventory management, and 24/7 Tamil support. Enterprise plans with multiple locations and advanced features are also available. First month is free for all new customers.",
    },
    {
      question: "Do I need internet all the time?",
      questionTamil: "எப்போதும் இணையம் தேவையா?",
      answer: "No! Only for the initial setup and periodic syncing. Your daily operations — billing, inventory, customer management — all work perfectly offline. Internet is only needed when you want to sync data across devices or access reports from another location.",
    },
    {
      question: "Can I track inventory in real-time?",
      questionTamil: "நிகழ்நேர சரக்குப் பதிவு சாத்தியமா?",
      answer: "Yes! Every sale automatically updates your inventory. You'll get low-stock alerts, see which items are selling fast, and track inventory across multiple locations. All reports are available in Tamil.",
    },
  ];

  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Frequently asked <span className="text-primary">questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Got questions? We've got answers in English & Tamil
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="glass-card rounded-2xl px-6 border-0"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <div className="space-y-1">
                  <p className="font-semibold text-lg">{faq.question}</p>
                  <p className="text-sm tamil-text text-muted-foreground">{faq.questionTamil}</p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-center">
          <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
          <p className="text-muted-foreground mb-6 tamil-text">இன்னும் கேள்விகள் உள்ளதா?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cta-primary px-6 py-3 rounded-full font-semibold">
              Call +91 98765 43210
            </button>
            <button className="px-6 py-3 rounded-full font-semibold border-2 border-primary bg-background hover:bg-primary hover:text-primary-foreground transition-colors">
              WhatsApp Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
