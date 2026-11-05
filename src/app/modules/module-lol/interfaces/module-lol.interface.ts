/**
 * Interfaz que representa a un campeón de League of Legends (LoL).
 *
 * Contiene la información básica necesaria para mostrar cada campeón
 * en la tabla o en cualquier componente de listado del módulo.
 *
 * @remarks
 * Cada campeón debe tener un `id` único, un `nombre`, un `titulo`,
 * una `region`, una `dificultad`, una `descripcion` y un `rol` válido
 * dentro de la lista de categorías definidas.
 */
export interface Lol {
  /** Identificador único del campeón */
  id: number;

  /** Nombre oficial del campeón */
  nombre: string;

  /** Título oficial del campeón */
  titulo: string;

  /** Región de Runaterra a la que pertenece */
  region: string;

  /** Nivel de dificultad del campeón */
  dificultad: 'Baja' | 'Media' | 'Alta';

  /** Descripción o habilidad característica del campeón */
  descripcion: string;

  /** Rol principal asignado al campeón */
  rol: RolLolCategoria;
}

/**
 * Tipo de rol que puede tener un campeón de League of Legends.
 *
 * @remarks
 * Este tipo restringe los roles a los valores clásicos del juego:
 * - 'Mago'
 * - 'Luchador'
 * - 'Tirador'
 * - 'Asesino'
 * - 'Tanque'
 * - 'Soporte'
 *
 * Se utiliza principalmente para mapear los badges de color en la UI.
 */
export type RolLolCategoria = 'Mago' | 'Luchador' | 'Tirador' | 'Asesino' | 'Tanque' | 'Soporte';
