import Image from "next/image"
import { Phone, Instagram } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export default function ListaPreciosMayorista() {
  const productos = [
    {
      id: 1,
      nombre: "Soporte para Auriculares Madera Paraíso Maciza",
      imagen: "/images/soporte-auricular.jpeg",
      precioMayor: 17000,
      precioIndividual: 35000,
      minimo: 3,
      maximo: 10,
    },
    {
      id: 2,
      nombre: "Estante Especiero 50 x 10cm Paraíso",
      imagen: "/images/especiero-paraiso.jpeg",
      precioMayor: 35000,
      precioIndividual: 26000,
      minimo: 5,
      maximo: 20,
    },
    {
      id: 3,
      nombre: "Toallero Hierro",
      imagen: "/images/toallero-hierro.jpeg",
      precioMayor: 24000,
      precioIndividual: 30000,
      minimo: 3,
      maximo: 8,
    },
    {
      id: 4,
      nombre: "Perchero 50 x 10cm Eucalipto",
      imagen: "/images/perchero.jpeg",
      precioMayor: 32000,
      precioIndividual: 13000,
      minimo: 4,
      maximo: 12,
    },
    {
      id: 5,
      nombre: "Dispenser Pino",
      imagen: "/images/dispenser.jpeg",
      precioMayor: 55000,
      precioIndividual: 3000,
      minimo: 6,
      maximo: 12,
    },
    {
      id: 6,
      nombre: "Escalera Decorativa 160cm",
      imagen: "/images/escalerita.jpeg",
      precioMayor: 38000,
      precioIndividual: 15000,
      minimo: 3,
      maximo: 10,
    },
    {
      id: 7,
      nombre: "Porta Velas Paraíso (incluye 3 velas)",
      imagen: "/images",
      precioMayor: 42000,
      precioIndividual: 7600,
      minimo: 2,
      maximo: 8,
    },
    {
      id: 8,
      nombre: "Estante J Paraíso 50 x 10cm",
      imagen: "/images",
      precioMayor: 48000,
      precioIndividual: 26000,
      minimo: 2,
      maximo: 6,
    },
    {
      id: 9,
      nombre: "Mesa De Luz H 60cm Alto Pino",
      imagen: "/images",
      precioMayor: 25000,
      precioIndividual: 45000,
      minimo: 4,
      maximo: 15,
    },
    {
      id: 10,
      nombre: "Mantas Ruisticas",
      imagen: "/images",
      precioMayor: 35000,
      precioIndividual: 23000,
      minimo: 3,
      maximo: 10,
    },
    {
      id: 11,
      nombre: "Dispenser Paraíso 20 x 12cm",
      imagen: "/images/jabonera.jpeg",
      precioMayor: 18000,
      precioIndividual: 6800,
      minimo: 6,
      maximo: 20,
    },
    {
      id: 12,
      nombre: "Tablas Rústicas",
      imagen: "/images/",
      precioMayor: 18000,
      precioIndividual: 15000,
      minimo: 6,
      maximo: 20,
    },
    {
      id: 13,
      nombre: "Macetas Cerámica",
      imagen: "/images/",
      precioMayor: 18000,
      precioIndividual: 6000,
      minimo: 6,
      maximo: 20,
    },
    {
      id: 14,
      nombre: "Plantas Artificiales (consultar según modelo y altura)",
      imagen: "/images",
      precioMayor: 0,
      precioIndividual: 0,
      minimo: 6,
      maximo: 20,
    },
  ]

  const formatearPrecio = (precio: number) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0,
    }).format(precio)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-800">Melina Vazquez Mobel</h1>
          <p className="text-center text-gray-600 mt-2 text-sm md:text-base">Lista de Precios Mayoristas
            300.000 Primera Compra
          </p>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productos.map((producto) => (
            <Card key={producto.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={producto.imagen || "/placeholder.svg"}
                  alt={producto.nombre}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-3 text-gray-800 line-clamp-2">{producto.nombre}</h3>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Precio x Mayor:</span>
                    <span className="font-bold text-green-600 text-lg">{formatearPrecio(producto.precioMayor)}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Precio x Unidad:</span>
                    <span className="font-semibold text-gray-700">{formatearPrecio(producto.precioIndividual)}</span>
                  </div>
                </div>

                <div className="border-t pt-3">
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Mín: {producto.minimo} unidades</span>
                    <span>Máx: {producto.maximo} unidades</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Contacto</h3>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <a
                href="https://wa.me/5411218958577"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-green-400 transition-colors duration-300"
              >
                <Phone className="w-5 h-5" />
                <span className="text-sm sm:text-base">WhatsApp: +54 11 2189 5857</span>
              </a>

              <a
                href="https://www.instagram.com/melinavazquezmobel?igsh=MW45OTZkY3JyZGQwdQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-pink-400 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
                <span className="text-sm sm:text-base">@melinavazquezmobel</span>
              </a>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-6 pt-4 text-center">
            <p className="text-sm text-gray-400">© 2024 Melina Vazquez Mobel. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}