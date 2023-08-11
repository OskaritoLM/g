export interface Productos{
    id_producto?: number,
    descripcion: string,
    tamano: string,
    color: string,
    id_tipo: number,
    imagen: string,
    precio_mayoreo: number,
    precio_menudeo: number,
    existencias: number
}