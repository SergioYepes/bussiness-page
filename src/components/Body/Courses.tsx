import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { Clock, Users, Award, BookOpen } from "lucide-react";
import cookingClass from "../../assets/cooking-class.jpg"

const Courses = () => {
  const courses = [
    {
      title: "Introducción a la Cocina",
      description: "Aprende los conceptos básicos de la cocina y técnicas fundamentales para comenzar tu aventura gastronómica.",
      level: "Principiante",
      duration: "4 semanas",
      students: 25,
      price: "$150",
      image: cookingClass,
      highlights: ["Técnicas básicas de corte", "Preparación de fondos", "Cocción de proteínas", "Presentación de platos"]
    },
    {
      title: "Cocina Internacional",
      description: "Explora sabores de todo el mundo con clases específicas sobre diferentes tradiciones culinarias.",
      level: "Intermedio",
      duration: "6 semanas",
      students: 20,
      price: "$220",
      image: cookingClass,
      highlights: ["Cocina italiana", "Gastronomía asiática", "Sabores mediterráneos", "Técnicas latinoamericanas"]
    },
    {
      title: "Técnicas Avanzadas",
      description: "Perfecciona tus habilidades culinarias con técnicas profesionales y presentaciones de chef.",
      level: "Avanzado",
      duration: "8 semanas",
      students: 15,
      price: "$350",
      image: cookingClass,
      highlights: ["Sous vide", "Fermentación", "Técnicas moleculares", "Emplatado profesional"]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Principiante": return "bg-green-100 text-green-800 hover:bg-green-200";
      case "Intermedio": return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200";
      case "Avanzado": return "bg-red-100 text-red-800 hover:bg-red-200";
      default: return "bg-gray-100 text-gray-800 hover:bg-gray-200";
    }
  };

  return (
    <section id="cursos" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nuestros Cursos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Descubre el programa educativo que mejor se adapte a tu nivel y objetivos culinarios
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="overflow-hidden shadow-elegant hover:shadow-xl transition-all duration-300 border-0">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge className={getLevelColor(course.level)}>
                    {course.level}
                  </Badge>
                  <span className="font-bold text-2xl text-accent">{course.price}</span>
                </div>

                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  {course.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {course.description}
                </p>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {course.students} max
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium text-foreground mb-2 flex items-center">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Lo que aprenderás:
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {course.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button variant="default" className="w-full">
                  <Award className="w-4 h-4 mr-2" />
                  Inscribirse
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            ¿No encuentras el curso perfecto para ti?
          </p>
          <Button variant="outline" size="lg">
            Solicitar Curso Personalizado
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;