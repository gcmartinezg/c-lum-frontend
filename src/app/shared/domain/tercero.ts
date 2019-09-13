export class Tercero {
    constructor(
        public terceroId : number,
        public tipoDocumentoId : number,
        public nombreTercero : string,
        public direccion : string,
        public email : string,
        public telefono : number,
        public numeroDocument:number,
        public idEstado : string = 'S'
    ){}
}
