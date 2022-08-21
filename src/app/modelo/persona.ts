export class Persona{
id?: number;
nombre: string;
apellido: string;
ubicacion: string;
profecion: string;
descripcion: string;
imagen: string;

constructor(nombre: string,apellido: string,ubicacion: string,profecion: string,descripcion: string,imagen: string){
    this.nombre = nombre;
    this.apellido = apellido;
    this.ubicacion = ubicacion;
    this.profecion = profecion;
    this.descripcion = descripcion;
    this.imagen = imagen;
    
}
}