import { Add, CustomizeProducts, ProductImages } from "@/src/components"

const SinglePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMAGEN */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* TEXTO */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-2xl font-semibold">Silla Amarilla Moderna</h1>
        <div className="flex-1">
          <p className="text-sm leading-relaxed mb-3">
            Agrega color y estilo a tu espacio con esta silla amarilla de diseño
            moderno. Estructura resistente y asiento ergonómico para máxima
            comodidad en sala, comedor u oficina.
          </p>

          <ul className="text-sm space-y-1 mb-3">
            <li><strong>Material:</strong> Plástico reforzado (patas de madera/metal, simulado)</li>
            <li><strong>Color:</strong> Amarillo brillante</li>
            <li><strong>Estilo:</strong> Minimalista y contemporáneo</li>
            <li><strong>Uso:</strong> Hogar y oficina</li>
          </ul>

          <div className="h-[2px] bg-gray-100" />
          <div className="flex items-center gap-4">
            <h3 className="text-xl text-gray-500 line-through"> $99.99 </h3>
            <h2 className="font-medium text-2xl"> $79.99 </h2>
          </div>
          <div className="h-[2px] bg-gray-100" />
          <CustomizeProducts />
          <Add />
          <div className="h-[2px] bg-gray-100" />
          <div className="text-sm">
            <h4 className="font-medium mb-4">Silla Amarilla Moderna</h4>
            <p>Silla amarilla de diseño moderno con asiento ergonómico y patas de madera.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePage