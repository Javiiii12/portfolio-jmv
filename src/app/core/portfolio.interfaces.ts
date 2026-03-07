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
    detalles?: string;
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

export interface IProyecto {
    titulo: string;
    descripcion: string;
    categoria: string;
    tecnologia: string;
    enlace: string;
    icono?: string;
    status?: string;
}

export interface ICertDetailItem {
    title: string;
    description: string;
}

export interface ICertDetail {
    id: string;
    title: string;
    credentialId: string;
    date: string;
    tags: string[];
    challengeText: string;
    preparationText: string;
    syllabusIntro?: string;
    syllabusItems?: ICertDetailItem[];
    studyIntro?: string;
    studyItems?: ICertDetailItem[];
    examText: string;
    reviewBest: string;
    reviewWorst: string;
    verdict: string;
    verificationUrl?: string;
}

export interface IPortfolioData {
    perfil: IPerfil;
    habilidades_destacadas: IHabilidadesDestacadas;
    certificaciones: ICertificacion[];
    formacion: IFormacion[];
    experiencia: IExperiencia[];
    proyectos: IProyecto[];
    certDetails: Record<string, ICertDetail>;
}
