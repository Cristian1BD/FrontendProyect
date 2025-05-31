// EstudianteTypes.ts

export interface GrupoType {
  id: number;
  nombre: string;
  cupo: number;
  hora: string;
  lugar: string;
  salida: string;
}

export interface EstudianteTypes {
  id: number;
  nombre: string;
  numeroDocumento: string;
  grupo?: GrupoType | null;
}
