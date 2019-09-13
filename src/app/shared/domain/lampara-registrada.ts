import { Timestamp } from "rxjs";

export class LamparaRegistrada {

    constructor(
        public lamparaRegistradaId: number,
        public usuarioId: string,
        public lamparaId: number,
        public latitudPosActualTecnico: number,
        public longitudPosActualTecnico: number,
        public fechaHora: Date,
        public idEstado:number
    ){}
}
