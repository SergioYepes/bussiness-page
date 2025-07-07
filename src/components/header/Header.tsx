import { ChefHat, Menu, X } from "lucide-react"
import { Button } from "../ui/Button"
import { useState } from "react"


function Header() {
    const [isMenuOpen, setMenuOpen]= useState(false)
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen)
    }
  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-border z-50">
        <div className="max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                <div className="flex items-center space-x-2">
                    <ChefHat className="w-8 h-8 text-primary" />
                    <span className="font-serif font-bold text-x1 text-foreground">
                        Conexiones Gastronómicas
                    </span>
                </div>
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#inicio" className="text-foreground hover:text-primary transition-colors font-medium">Inicio</a>
                    <a href="#servicios" className="text-foreground hover:text-primary transition-colors font-medium">Servicios</a>
                    <a href="#cursos" className="text-foreground hover:text-primary transition-colors font-medium">Cursos</a>
                    <a href="#chefs" className="text-foreground hover:text-primary transition-colors font-medium">Chefs</a>
                    <a href="#contacto" className="text-foreground hover:text-primary transition-colors font-medium">Contacto</a>
                    <Button variant="hero" size="sm">Reservar ahora</Button>
                </div>
                {/* Mobile menu button */}
                <div className="md:hidden">
                    <Button variant="ghost" size="icon" onClick={toggleMenu}>
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </Button>
                </div>
                {/* Mobile Navigation */}
            </div>
            {isMenuOpen && (
                <div className="md:hidden border-t border-border bg-background">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <a href="#inicio" className="block px-3 py-2 font-medium text-foreground transition-colors hover:text-primary">Inicio</a> 
                            <a href="#servicios" className="block px-3 py-2 font-medium text-foreground transition-colors hover:text-primary">Servicios</a> 
                            <a href="#cursos" className="block px-3 py-2 font-medium text-foreground transition-colors hover:text-primary">Cursos</a> 
                            <a href="#chefs" className="block px-3 py-2 font-medium text-foreground transition-colors hover:text-primary">Chefs</a> 
                            <a href="#contacto" className="block px-3 py-2 font-medium text-foreground transition-colors hover:text-primary">Contacto</a>
                            <div className="px-3 py-2">
                                <Button variant="hero" size="sm" className="w-full">Reservar ahora</Button>
                            </div>
                        </div>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Header
