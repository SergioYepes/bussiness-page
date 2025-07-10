import { ChefHat, Facebook, Instagram, Twitter, Youtube, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <ChefHat className="w-8 h-8" />
              <span className="font-serif font-bold text-xl">
                Conexiones Gastronómicas
              </span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
              Conectamos la pasión por la gastronomía con el conocimiento profesional. 
              Descubre, aprende y crea experiencias culinarias únicas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Servicios</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#servicios" className="hover:text-primary-foreground transition-colors">Contacto con Chefs</a></li>
              <li><a href="#cursos" className="hover:text-primary-foreground transition-colors">Escuela de Cocina</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Eventos Privados</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Consultoría</a></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Cursos</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Cocina Básica</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Cocina Internacional</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Técnicas Avanzadas</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Repostería</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Conexiones Gastronómicas. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-1 text-primary-foreground/60 text-sm mt-4 md:mt-0">
              <span>Hecho con</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>para los amantes de la gastronomía</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;