export class Lampara {
    constructor(
        public lamparaId : number,
        public potencia : number,
        public tipoLamparaId : number,
        public nivelTension : number,
        public tipoBalastoId : number,
        public funcionamiento : string,
        public tipoEspacioIluminadoId : number,
        public controlEncendido : string,
        public valorPerdidas : number,
        public transformadorId : number,
        public urlImagen : string,
        public latitudLampara : number,
        public longitudLampara : number,
        public redAlimentacionId: number,
        public soporteLampara: number,
        public idEstado: number

    ){}
}
