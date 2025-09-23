import React from 'react'

const Filter: React.FC = () => {
    return (
        <div className='mt-12 flex justify-between' >
            <div className="flex gap-6 flex-wrap" >
                <select name="type" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEBEB]'>
                    <option value="">Tipo</option>
                    <option value="Mesas">Mesas</option>
                    <option value="Sillas">Sillas</option>
                    <option value="Comedores">Comedores</option>
                    <option value="Sofás">Sofás</option>
                    <option value="Camas">Camas</option>
                    <option value="Escritorios">Escritorios</option>
                    <option value="Estanterías">Estanterías</option>
                    <option value="Armarios">Armarios</option>
                    <option value="Mesas de Centro">Mesas de Centro</option>
                    <option value="Taburetes">Taburetes</option>
                </select>
                <input type="text" name='mínimo' placeholder='Mínimo' className='text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400' />
                <input type="text" name='máximo' placeholder='Máximo' className='text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400' />
                <select name="size" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEBEB]'>
                    <option value="">Tamaño</option>
                    <option value="Pequeño">Pequeño</option>
                    <option value="Mediano">Mediano</option>
                    <option value="Grande">Grande</option>
                    <option value="Extra Grande">Extra Grande</option>
                    <option value="Individual">Individual</option>
                    <option value="Para 2 personas">Para 2 personas</option>
                    <option value="Para 4 personas">Para 4 personas</option>
                    <option value="Para 6+ personas">Para 6+ personas</option>
                </select>
                <select name="color" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEBEB]'>
                    <option value="">Color</option>
                    <option value="Negro">Negro</option>
                    <option value="Blanco">Blanco</option>
                    <option value="Marrón">Marrón</option>
                    <option value="Beige">Beige</option>
                    <option value="Gris">Gris</option>
                    <option value="Azul">Azul</option>
                    <option value="Verde">Verde</option>
                    <option value="Rojo">Rojo</option>
                    <option value="Madera Natural">Madera Natural</option>
                    <option value="Roble">Roble</option>
                    <option value="Nogal">Nogal</option>
                    <option value="Pino">Pino</option>
                </select>
                <select name="category" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEBEB]'>
                    <option value="">Categoría</option>
                    <option value="Sala de Estar">Sala de Estar</option>
                    <option value="Comedor">Comedor</option>
                    <option value="Dormitorio">Dormitorio</option>
                    <option value="Oficina">Oficina</option>
                    <option value="Cocina">Cocina</option>
                    <option value="Exterior">Exterior</option>
                    <option value="Infantil">Infantil</option>
                    <option value="Baño">Baño</option>
                    <option value="Recibidor">Recibidor</option>
                </select>
                <select name="filters" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEBEB]'>
                    <option value="">Todos los filtros</option>
                    <option value="Nuevos">Nuevos</option>
                    <option value="En Oferta">En Oferta</option>
                    <option value="Más Vendidos">Más Vendidos</option>
                    <option value="Eco-Amigables">Eco-Amigables</option>
                    <option value="Entrega Rápida">Entrega Rápida</option>
                    <option value="Personalizable">Personalizable</option>
                </select>
            </div>
            <div className="">
                <select name="sort" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400'>
                    <option value="">Ordenar por</option>
                    <option value="price-asc">Precio: Menor a Mayor</option>
                    <option value="price-desc">Precio: Mayor a Menor</option>
                    <option value="newest">Más Nuevos</option>
                    <option value="oldest">Más Antiguos</option>
                    <option value="popular">Más Populares</option>
                    <option value="rating">Mejor Calificados</option>
                    <option value="name-asc">Nombre A-Z</option>
                    <option value="name-desc">Nombre Z-A</option>
                </select>
            </div>
        </div>
    )
}

export default Filter