export class Usuario {
    constructor(
        public usuUsuario : string,
        public nDocumento : number,
        public tDocId : number,
        public clave : string,
        public tUsuarioId: number,
        public estado : string = 'S'
    ){}
}
