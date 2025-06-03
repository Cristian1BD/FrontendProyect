export interface Programacion {
  id?: number;
  docenteId: string;
  grupoId: string;
  salida: string;
  fecha: string;        // formato ISO yyyy-MM-dd
  horaSalida: string;   // formato HH:mm
  horaRegreso: string;  // formato HH:mm
  destino: string;
  cupo: number;
}