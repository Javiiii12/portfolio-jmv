export interface IPerfil {
    nombre: string;
    titular: string;
    ubicacion: string;
    email: string;
    telefono: string;
    bio: string;
}

export interface IHabilidadesDestacadas {
    ciberseguridad_y_hacking: string[];
    diseno_y_desarrollo_web: string[];
    otros_conocimientos: string[];
}

export interface ICertificacion {
    id: string;
    nombre: string;
    emisor: string;
}

export interface IFormacion {
    titulacion: string;
    institucion: string;
    fecha: string;
    estado: string;
    descripcion: string;
}

export interface IExperiencia {
    puesto: string;
    empresa: string;
    fecha: string;
    hitos: string[];
}

export interface IPortfolioData {
    perfil: IPerfil;
    habilidades_destacadas: IHabilidadesDestacadas;
    certificaciones: ICertificacion[];
    formacion: IFormacion[];
    experiencia: IExperiencia[];
}
