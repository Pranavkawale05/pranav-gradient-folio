import { Card, CardContent } from "@/components/ui/card";
import { ContactInfo } from "@/data/contact";

interface ContactInfoCardProps {
  info: ContactInfo;
  index: number;
}

const ContactInfoCard = ({ info, index }: ContactInfoCardProps) => {
  return (
    <Card 
      className="bg-gradient-card border-0 shadow-lg hover-lift transition-all duration-300"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardContent className="p-6">
        <div className="flex items-center space-x-4">
          <div className={`p-3 rounded-lg bg-gradient-accent ${info.color}`}>
            <info.icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-grow">
            <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
              {info.label}
            </h4>
            {info.href ? (
              <a 
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-lg font-semibold hover:text-primary transition-colors"
              >
                {info.value}
              </a>
            ) : (
              <p className="text-lg font-semibold">{info.value}</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactInfoCard;