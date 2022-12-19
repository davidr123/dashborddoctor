import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterpatientsService {
  private provincia: string[]=['Esmeralda', 'Manabí', 'Los Ríos', 'Santa Elena', 'Guayas', 'Santo Domingo', 'El Oro', 'Azuay', 'Bolivar', 'Cañar', 'Carchi', 'Cotopaxi', 'Chimborazo', 'Imbabura', 'Loja', 'Pichincha', 'Tungurahua', 'Morona Santiago', 'Napo', 'Orellana', 'Pastaza', 'Sucumbios', 'Zamora Chinchipe'];

  private cantones_esmeralda: string[]=['Atacames', 'Muisne', 'Rio Verde', 'San Lorenzo', 'Eloy Alfaro', 'Rio Verde', 'Quininde', 'Esmeraldas'];

  private cantones_manabi: string[]=['Bolivar', 'Chone', 'El Carmen', 'Jama', 'Flavio Alfaro', 'Jaramijó', 'Jipijapa', 'Junín', 'Manta', 'Montecristi', 'Olmedo', 'Paján', 'Pedernales', 'Pichincha', 'Portoviejo', 'Puerto López', 'Rocafuerte', 'San Vicente', 'Santa Ana', 'Sucre', 'Tosagua', 'Veinticuatro de Mayo'];

  private cantones_losrios: string[]=['Baba', 'Babahoyo', 'Buena fe', 'Mocache', 'Montalvo', 'Palenque', 'Pueblo Viejo', 'Quevedo', 'Quinsaloma', 'Urdaneta', 'Valencia', 'Ventana', 'Vinces'];

  private cantones_santaelena: string[]=['Santa Elena', 'Ballenita', 'Ancón', 'Atahualpa', 'Chanduy', 'Colonche', 'Manglar Alto', 'Simón Bolívar'];

  private cantones_guayas: string[]=['Guayaquil', 'Alfredo Baquerizo Moreno', 'Balao', 'Balzar', 'Colimes', 'Daule', 'Duran', 'El Empalme', 'El Triunfo', 'Antonio Elizalde', 'Isidro Ayora', 'Lomas de Sargentillo', 'Marcelino Maridueña', 'Milagro', 'Naranjal', 'Naranjito', 'Nobol', 'Palestina', 'Pedro Carbo', 'Playas', 'Salitre', 'Samborondon', 'Santa Lucia', 'Simón Bolívar', 'Yaguachi'];

  get provincias(){
    return this.provincia
  }

  get esmeralda(){
    return this.cantones_esmeralda
  }
  get manabi(){
    return this.cantones_manabi
  }

  get losrios(){
    return this.cantones_losrios
  }

  get santaelena(){
    return this.cantones_santaelena
  }

  get guayas(){
    return this.cantones_guayas;
  }

  constructor() { }





}
