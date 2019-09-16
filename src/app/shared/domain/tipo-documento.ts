export class TipoDocumento {
    constructor(
        public tipoDocumentoId : number,
        public nombreTipoDocumento : string,
        public idEstado_Estado: number = 1
    ){}
}
