export type JuegoBadge = 'warning' | 'primary' | 'success' | 'danger';

export interface Juego {
  id: number;
  nombre: string;
  genero: string;
  plataforma: string;
  anioLanzamiento: number;
  imagen: string;
  descripcion: string;
  badge: JuegoBadge;
}
