export class Tercero {
    constructor(
        public terceroId : number,
        public tipoDocumentoId_TipoDocumento : number,
        public nombreTercero : string,
        public direccion : string,
        public email : string,
        public telefono : number,
        public numeroDocumento:number,
        public idEstado_Estado : number = 1
    ){}
}
