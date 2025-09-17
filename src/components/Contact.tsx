import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { contactInfo } from "@/data/contact";
import ContactInfoCard from "@/components/ui/ContactInfoCard";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSending) return;

    setIsSending(true);
    try {
      await emailjs.send(
        "service_ly7prbw",
        "template_fencc3p",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "YkGg5g6RZCN3KlStq"
      );

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you shortly.",
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("EmailJS send error", error);
      toast({
        title: "Failed to send",
        description: "Please try again in a moment or email me directly.",
      });
    } finally {
      setIsSending(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss opportunities, collaborate on projects, or just have a conversation about technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <ContactInfoCard key={info.id} info={info} index={index} />
                ))}
              </div>
            </div>

            {/* Quick Connect */}
            <Card className="bg-gradient-card border-0 shadow-lg">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">Quick Connect</h4>
                <div className="flex gap-4">
                  <Button 
                    asChild
                    variant="outline" 
                    className="flex-1 hover:bg-primary/10 hover:border-primary/50"
                  >
                    <a href="mailto:Pranavlkawale1@gmail.com">
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </a>
                  </Button>
                  <Button 
                    asChild
                    variant="outline" 
                    className="flex-1 hover:bg-accent/10 hover:border-accent/50"
                  >
                    <a href="tel:7022018900">
                      <Phone className="w-4 h-4 mr-2" />
                      Call
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up delay-200">
            <Card className="bg-gradient-card border-0 shadow-lg hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="bg-background/50 border-muted-foreground/20 focus:border-primary/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-background/50 border-muted-foreground/20 focus:border-primary/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, opportunity, or just say hello!"
                      rows={6}
                      required
                      className="bg-background/50 border-muted-foreground/20 focus:border-primary/50 resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-accent hover:opacity-90 text-white font-semibold py-6 text-lg"
                    disabled={isSending}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {isSending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
