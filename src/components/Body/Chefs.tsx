import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { Star, MapPin, Award, Calendar } from "lucide-react";

const Chefs = () => {
  const chefs = [
    {
      name: "Chef María González",
      specialty: "Cocina Mediterránea",
      experience: "15 años",
      rating: 4.9,
      location: "Barcelona",
      achievements: ["Estrella Michelin", "James Beard Award"],
      description: "Especializada en cocina mediterránea moderna con técnicas tradicionales. Ha trabajado en los mejores restaurantes de Europa.",
      avatar: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=300&h=300&fit=crop&crop=face",
      price: "$120/hora"
    },
    {
      name: "Chef Carlos Mendoza",
      specialty: "Cocina Latinoamericana",
      experience: "12 años",
      rating: 4.8,
      location: "Ciudad de México",
      achievements: ["World's 50 Best", "Chef del Año"],
      description: "Maestro en fusión latinoamericana, combina ingredientes ancestrales con técnicas contemporáneas.",
      avatar: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=300&h=300&fit=crop&crop=face",
      price: "$100/hora"
    },
    {
      name: "Chef Elena Rossi",
      specialty: "Repostería Artesanal",
      experience: "10 años",
      rating: 5.0,
      location: "Milán",
      achievements: ["Pastry Chef of the Year", "World Chocolate Masters"],
      description: "Experta en repostería francesa e italiana. Sus creaciones son verdaderas obras de arte comestibles.",
      avatar: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=300&h=300&fit=crop&crop=face",
      price: "$150/hora"
    },
    {
      name: "Chef Hiroshi Tanaka",
      specialty: "Cocina Japonesa",
      experience: "20 años",
      rating: 4.9,
      location: "Tokio",
      achievements: ["Sushi Master", "3 Estrellas Michelin"],
      description: "Maestro sushiman con dos décadas perfeccionando el arte culinario japonés tradicional.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      price: "$200/hora"
    }
  ];

  return (
    <section id="chefs" className="py-20 bg-gradient-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nuestros Chefs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Conecta con chefs profesionales reconocidos mundialmente y aprende directamente 
            de los mejores en la industria gastronómica
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {chefs.map((chef, index) => (
            <Card key={index} className="overflow-hidden shadow-elegant hover:shadow-xl transition-all duration-300 border-0 bg-card">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={chef.avatar} 
                  alt={chef.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {chef.experience}
                  </Badge>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                    <span className="text-sm font-medium">{chef.rating}</span>
                  </div>
                </div>

                <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                  {chef.name}
                </h3>
                
                <p className="text-accent font-medium mb-2">
                  {chef.specialty}
                </p>

                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  {chef.location}
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {chef.description}
                </p>

                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <Award className="w-4 h-4 text-accent mr-2" />
                    <span className="text-sm font-medium text-foreground">Logros:</span>
                  </div>
                  <div className="space-y-1">
                    {chef.achievements.map((achievement, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs mr-1 mb-1">
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="font-bold text-lg text-foreground">{chef.price}</span>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                    Disponible
                  </Badge>
                </div>

                <Button variant="default" className="w-full">
                  <Calendar className="w-4 h-4 mr-2" />
                  Reservar Sesión
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center bg-card rounded-2xl p-8 shadow-warm">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
            ¿Buscas un chef especializado?
          </h3>
          <p className="text-muted-foreground mb-6">
            Contamos con más de 25 chefs profesionales especializados en diferentes cocinas del mundo
          </p>
          <Button variant="outline" size="lg">
            Ver Todos los Chefs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Chefs;