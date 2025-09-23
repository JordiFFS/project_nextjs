import { Filter, ProductList } from "@/src/components"
import Image from "next/image"

const ListPage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* Campaña */}
      <div className="hidden bg-pink-50 px-4 sm:flex justify-between h-64">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700"> Tienes descuento en varios productos del 20% </h1>
          {/* <h2 className="text-2xl font-semibold leading-[32px] text-gray-700"> Hasta el 31 de diciembre </h2> */}
          <button className="bg-notify text-white w-max px-5 py-3 rounded-3xl text-sm"> Comprar ahora! </button>
        </div>
        <div className="relative w-1/3">
          <Image src='/Publicidad.png' alt="" fill className="object-contain" />
        </div>
      </div>
      {/* Filtros */}
      <Filter />
      {/* Productos */}
      <h1 className="mt-12 text-xl font-semibold">Compras para ti!</h1>
      <ProductList />
    </div>
  )
}

export default ListPage