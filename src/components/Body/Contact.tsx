import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";
import { Label } from "../ui/Label";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contactanos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            ¿Listo para comenzar tu aventura gastronómica? Estamos aquí para ayudarte 
            a encontrar el chef perfecto o el curso ideal
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 shadow-elegant border-0 bg-card">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
              Envíanos un mensaje
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-foreground font-medium">
                    Nombre
                  </Label>
                  <Input 
                    id="firstName" 
                    placeholder="Tu nombre"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-foreground font-medium">
                    Apellido
                  </Label>
                  <Input 
                    id="lastName" 
                    placeholder="Tu apellido"
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-foreground font-medium">
                  Email
                </Label>
                <Input 
                  id="email" 
                  type="email"
                  placeholder="tu@email.com"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-foreground font-medium">
                  Teléfono
                </Label>
                <Input 
                  id="phone" 
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="service" className="text-foreground font-medium">
                  Servicio de interés
                </Label>
                <select 
                  id="service"
                  className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="chef-contact">Contacto con Chef</option>
                  <option value="cooking-classes">Clases de Cocina</option>
                  <option value="private-event">Evento Privado</option>
                  <option value="consultation">Consultoría Gastronómica</option>
                </select>
              </div>

              <div>
                <Label htmlFor="message" className="text-foreground font-medium">
                  Mensaje
                </Label>
                <Textarea 
                  id="message"
                  placeholder="Cuéntanos sobre tu proyecto gastronómico..."
                  rows={4}
                  className="mt-1"
                />
              </div>

              <Button variant="hero" className="w-full" size="lg">
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensaje
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-6 shadow-warm border-0 bg-card">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Teléfono</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  <p className="text-muted-foreground">+1 (555) 987-6543</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-warm border-0 bg-card">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Email</h4>
                  <p className="text-muted-foreground">info@conexionesgastronomicas.com</p>
                  <p className="text-muted-foreground">chefs@conexionesgastronomicas.com</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-warm border-0 bg-card">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Ubicación</h4>
                  <p className="text-muted-foreground">Calle Gastronómica 123</p>
                  <p className="text-muted-foreground">Centro Culinario, CP 12345</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-warm border-0 bg-card">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Horarios</h4>
                  <p className="text-muted-foreground">Lunes - Viernes: 9:00 AM - 8:00 PM</p>
                  <p className="text-muted-foreground">Sábados: 10:00 AM - 6:00 PM</p>
                  <p className="text-muted-foreground">Domingos: Cerrado</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;