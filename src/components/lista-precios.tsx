"use client"

import { useState } from "react"
import Image from "next/image"

// Componentes de iconos SVG
const Phone = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
)

const Instagram = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01m-6.26 0h.01M7.5 4h9a3.5 3.5 0 013.5 3.5v9a3.5 3.5 0 01-3.5 3.5h-9A3.5 3.5 0 014 16.5v-9A3.5 3.5 0 017.5 4z"
    />
  </svg>
)

export default function ListaPreciosMayorista() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

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
      precioMayor: 2600,
      precioIndividual: 35000,
      minimo: 3,
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
      precioMayor: 22000,
      precioIndividual: 32000,
      minimo: 3,
      maximo: 12,
    },
    {
      id: 5,
      nombre: "Dispenser Pino",
      imagen: "/images/dispenser.jpeg",
      precioMayor: 3000,
      precioIndividual: 6000,
      minimo: 3,
      maximo: 12,
    },
    {
      id: 6,
      nombre: "Escalera Decorativa 160cm",
      imagen: "/images/escalerita.jpeg",
      precioMayor: 19500,
      precioIndividual: 38000,
      minimo: 3,
      maximo: 10,
    },
    {
      id: 7,
      nombre: "Porta Velas Paraíso (incluye 3 velas)",
      imagen: "/images/velero.jpeg",
      precioMayor: 4200,
      precioIndividual: 9800,
      minimo: 3,
      maximo: 8,
    },
    {
      id: 8,
      nombre: "Estante J Paraíso 50 x 10cm",
      imagen: "/images/toallero-paraiso.jpeg",
      precioMayor: 26000,
      precioIndividual: 48000,
      minimo: 3,
      maximo: 6,
    },
    {
      id: 9,
      nombre: "Mesa De Luz H 60cm Paraíso",
      imagen: "/images/mesa-h.jpeg",
      precioMayor: 70000,
      precioIndividual: 89000,
      minimo: 3,
      maximo: 15,
    },
    {
      id: 10,
      nombre: "Mesa De Luz H 60cm Pino",
      imagen: "/images/mesa-h.jpeg",
      precioMayor: 45000,
      precioIndividual: 58000,
      minimo: 3,
      maximo: 1,
    },
    {
      id: 11,
      nombre: "Mantas Rusticas",
      imagen: "/images/mantas-rusticas.jpeg",
      precioMayor: 23000,
      precioIndividual: 32000,
      minimo: 3,
      maximo: 10,
    },
    {
      id: 12,
      nombre: "Dispenser Paraíso 20 x 12cm",
      imagen: "/images/jabonera.jpeg",
      precioMayor: 6800,
      precioIndividual: 9000,
      minimo: 3,
      maximo: 20,
    },
    {
      id: 13,
      nombre: "Tablas Rústicas",
      imagen: "/images/tablas-rusticas.jpeg",
      precioMayor: 18000,
      precioIndividual: 39000,
      minimo: 3,
      maximo: 20,
    },
    {
      id: 14,
      nombre: "Troncos Rústicos",
      imagen: "/images/macetas.jpeg",
      precioMayor: 6000,
      precioIndividual: 18000,
      minimo: 3,
      maximo: 20,
    },
      {
      id: 15,
      nombre: "Macetas Cerámicas",
      imagen: "/images/maceta.jpeg",
      precioMayor: 4900,
      precioIndividual: 6500,
      minimo: 3,
      maximo: 20,
    },
    {
      id: 16,
      nombre: "Plantas Artificiales (consultar según modelo y altura)",
      imagen: "/images/pnantas-artificiales.jpeg",
      precioMayor: 0,
      precioIndividual: 0,
      minimo: 3,
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

  // Clases CSS dinámicas
  const containerClass = isDarkMode
    ? "min-h-screen transition-all duration-300 bg-gray-900"
    : "min-h-screen transition-all duration-300 bg-gray-50"

  const headerClass = isDarkMode
    ? "shadow-sm border-b transition-colors duration-300 bg-gray-800 border-gray-700"
    : "shadow-sm border-b transition-colors duration-300 bg-white border-gray-200"

  const titleClass = isDarkMode
    ? "text-2xl md:text-3xl lg:text-4xl font-bold transition-colors text-white"
    : "text-2xl md:text-3xl lg:text-4xl font-bold transition-colors text-gray-800"

  const subtitleClass = isDarkMode
    ? "mt-1 text-sm md:text-base transition-colors text-gray-300"
    : "mt-1 text-sm md:text-base transition-colors text-gray-600"

  const buttonClass = isDarkMode
    ? "ml-4 p-3 rounded-full border-2 transition-all duration-300 shadow-md hover:shadow-lg border-gray-600 bg-gray-800 hover:bg-gray-700"
    : "ml-4 p-3 rounded-full border-2 transition-all duration-300 shadow-md hover:shadow-lg border-gray-300 bg-white hover:bg-gray-100"

  const cardClass = isDarkMode
    ? "rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden bg-gray-800 border-gray-700 border"
    : "rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden bg-white border-gray-200 border"

  const cardTitleClass = isDarkMode
    ? "font-semibold text-lg mb-3 transition-colors text-white"
    : "font-semibold text-lg mb-3 transition-colors text-gray-800"

  const labelClass = isDarkMode ? "text-sm transition-colors text-gray-300" : "text-sm transition-colors text-gray-600"

  const priceClass = isDarkMode
    ? "font-bold text-lg transition-colors text-green-400"
    : "font-bold text-lg transition-colors text-green-600"

  const individualPriceClass = isDarkMode
    ? "font-semibold transition-colors text-gray-200"
    : "font-semibold transition-colors text-gray-700"

  const borderClass = isDarkMode
    ? "border-t pt-3 transition-colors border-gray-600"
    : "border-t pt-3 transition-colors border-gray-200"

  const minMaxClass = isDarkMode
    ? "flex justify-between text-xs transition-colors text-gray-400"
    : "flex justify-between text-xs transition-colors text-gray-500"

  const footerClass = isDarkMode
    ? "mt-12 transition-colors duration-300 bg-gray-950 text-white"
    : "mt-12 transition-colors duration-300 bg-gray-800 text-white"

  const footerBorderClass = isDarkMode
    ? "border-t mt-6 pt-4 text-center transition-colors border-gray-600"
    : "border-t mt-6 pt-4 text-center transition-colors border-gray-700"

  const footerTextClass = isDarkMode
    ? "text-sm transition-colors text-gray-500"
    : "text-sm transition-colors text-gray-400"

return (
    <div className={containerClass}>
      <header className={headerClass}>
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex-1">
              <div className="flex items-center justify-center gap-4">
                {/* Logo con imagen */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shadow-lg border-2 border-white">
                  <Image 
                    src="/images/logo.jpg" 
                    alt="Logo Melina Vazquez Mobel" 
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="text-center">
                  <h1 className={titleClass}>Melina Vazquez Mobel</h1>
                  <p className={subtitleClass}>Lista de Precios Mayoristas. Primera compra minimo $250.000</p>
                </div>
              </div>
            </div>

            {/* Botón de modo oscuro */}
            <button
              onClick={toggleDarkMode}
              className={buttonClass}
              aria-label={isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            >
              {isDarkMode ? (
                <svg className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productos.map((producto) => (
            <div key={producto.id} className={cardClass}>
              {/* Imagen del producto */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={producto.imagen || "/placeholder.svg"}
                  alt={producto.nombre}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-4">
                <h3 className={cardTitleClass}>{producto.nombre}</h3>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center">
                    <span className={labelClass}>Precio x Mayor:</span>
                    <span className={priceClass}>{formatearPrecio(producto.precioMayor)}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className={labelClass}>Precio x Unidad:</span>
                    <span className={individualPriceClass}>{formatearPrecio(producto.precioIndividual)}</span>
                  </div>
                </div>

                <div className={borderClass}>
                  <div className={minMaxClass}>
                    <span>Mín: {producto.minimo} unidades</span>
                    <span>Máx: {producto.maximo} unidades</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer con iconos SVG */}
      <footer className={footerClass}>
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

          <div className={footerBorderClass}>
            <p className={footerTextClass}>
              © 2025 Melina Vazquez Mobel. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}