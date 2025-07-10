import { Button } from "../ui/Button";
import heroChef from "../../assets/heroChef.png";
import { ArrowRight, Award, Star, Users } from "lucide-react";
const Hero = () => {
  return ( 
        <section className="min-h-screen flex items-center relative overflow-hidden" id="inicio">
            {/* Image */}
            <div className="absolute inset-0 z-0">
                <img src={heroChef} alt="chef profesional cocinando" className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0 bg-black/50"></div>
            </div>
            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <div className="max-w-4xl mx-auto">
                    <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6 font-bold leading-tight">
                        conecta con la <span className="text-secondary block">Excelencia culinaria</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto leading-relaxed">
                        Descubre el arte de cocinar junto a chefs profesionales y transforma tu pasión 
                        gastronómica en habilidades extraordinarias
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Button variant="hero" size="lg" className="text-lg">
                            Explorar Cursos
                            <ArrowRight className="ml-2 w-5 h-5"/>
                        </Button>
                        <Button variant="outline" size="lg" className="text-lg bg-white/10 border-white/20 text-white hover:bg-white/20">
                            Contactar Chefs
                        </Button>
                    </div>
                {/* stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                        <div className="text-center">
                            <div className="flex items-center justify-center mb-3">
                                <Users className="w-8 h-8 text-secondary mr-2"/>
                                <span className="text-3xl font-bold">150+</span>
                            </div>
                            <p className="text-gray-200">Estudiantes graduados</p>
                        </div>
                        <div className="text-center">
                            <div className="flex items-center justify-center mb-3">
                                <Award className="w8- h8 text-secondary mr-2"/>
                                <span className="text-3xl font-bold">25+</span>
                            </div>
                            <p className="text-gray-200">Chefs profesionales</p>
                        </div>
                        <div className="text-center">
                            <div className="flex items-center justify-center mb-3">
                                <Star className="w8- h8 text-secondary mr-2"/>
                                <span className="text-3xl font-bold">4.9</span>
                            </div>
                            <p className="text-gray-200">Calificacion Promedio</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Scroll */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
                </div>
            </div>

        </section>
    )
};
export default Hero;
