export class Tercero {
    constructor(
        public terceroId : number,
        public nDocumento : number,
        public tDocId : number,
        public nombre : string,
        public direccion : string,
        public correo : string,
        public telefono : string,
        public estado : string = 'S'
    ){}
}
