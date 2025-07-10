import { Calendar, ChefHat, GraduationCap, Heart, Star, Users } from "lucide-react"
import { Card } from "../ui/Card"
import { Button } from "../ui/Button"

function Services() {
  return (
    <section id="servicios" className='py-20 bg-gradient-warm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='font-serif text-4xl md:text-5xl font-bold text-foreground mb-6'>Nuestros Servicios</h2>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>Ofrecemos experiencias gastronómicas únicas que conectan la pasión por la cocina 
            con el conocimiento profesional</p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16'>
          {/* Contacto con Chefs */}
          <Card className="p-8 shadow-elegant hover:shadow-xl transition-all duration-300 border-0 bg-card">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mr-4">
                <ChefHat className="w-8 h-8 text-primary-foreground"/>
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground">
                Contacto con Chefs
              </h3>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Conecta directamente con chefs profesionales para eventos privados, 
              clases magistrales y asesorías personalizadas en desarrollo de menús.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center text-foreground">
                <Star className="w-5 h-5 text-secondary mr-3" />
                <span>Experiencia personalizada</span>
              </div>
              <div className="flex items-center text-foreground">
                <Users className="w-5 h-5 text-secondary mr-3" />
                <span>Aprendizaje directo</span>
              </div>
              <div className="flex items-center text-foreground">
                <Heart className="w-5 h-5 text-secondary mr-3" />
                <span>Red de contactos gastronómicos</span>
              </div>
            </div>
            <Button variant="warm" className="w-full">
              Contactar Chefs
            </Button>
          </Card>
          {/* Escuela de Cocina */}
          <Card className="p-8 shadow-elegant hover:shadow-xl transition-all duration-300 border-0 bg-card">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mr-4">
                <GraduationCap className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground">
                Escuela de Cocina
              </h3>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Aprende en nuestro espacio dedicado a la enseñanza gastronómica. 
              Cursos para todos los niveles, desde principiantes hasta aspirantes a chefs.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center text-foreground">
                <Calendar className="w-5 h-5 text-accent mr-3" />
                <span>Clases prácticas</span>
              </div>
              <div className="flex items-center text-foreground">
                <Users className="w-5 h-5 text-accent mr-3" />
                <span>Talleres interactivos</span>
              </div>
              <div className="flex items-center text-foreground">
                <Star className="w-5 h-5 text-accent mr-3" />
                <span>Certificaciones profesionales</span>
              </div>
            </div>

            <Button variant="secondary" className="w-full">
              Ver cursos
            </Button>
          </Card>
        </div>
        {/* Call to Action */}
        <div className="text-center bg-card rounded-2xl p-8 shadow-warm">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
            ¿Listo para comenzar tu viaje culinario?
          </h3>
          <p className="text-muted-foreground mb-6">
            Únete a nuestra comunidad gastronómica y descubre tu potencial en la cocina
          </p>
          <Button variant="hero" size="lg">
            Comenzar Ahora
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Services
