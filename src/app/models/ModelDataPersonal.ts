interface Contacto {
    telefono: string;
    email: string;
    linkedin: string;
    github: string;
}
interface Habilidades {
    nombre: string;
    nivel: string;
    porcentaje: number;
    icon: any;
}

interface Profesion {
    titulo: string;
    posicion: string;
    registro: string;
}

export default interface PresentacionPersonalData {
    nombre: string;
    apellido: string;
    edad: number;
    profesion: Profesion;
    habilidades: Habilidades[];
    contacto: Contacto;
    descripcion: string;
    foto: string;
}