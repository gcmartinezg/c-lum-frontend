import { Timestamp } from "rxjs";

export class LamparaRegistrada {

    constructor(
        public lRegId: number,
        public usuarioId: number,
        public lamparaId: number,
        public latitudPosActual: number,
        public longitudPosActual: number,
        public fechaHora: Date
    ){}
}
