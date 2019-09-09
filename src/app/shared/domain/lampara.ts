export class Lampara {
    constructor(
        public lamparaId : number,
        public potencia : number,
        public tLamparaId : number,
        public nivelTension : number,
        public tBalastroId : number,
        public funcionamiento : string,
        public tEspacioId : number,
        public controlEncendido : string,
        public valorPerdidas : number,
        public transformadorId : number,
        public fotoUrl : string,
        public latitud : number,
        public longitud : number
    ){}
}
