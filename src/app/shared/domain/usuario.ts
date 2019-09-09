export class Usuario {
    constructor(
        public usuUsuario : string,
        public nDocumento : number,
        public tDocId : number,
        public contrasena : string,
        public tUsuarioId: number,
        public estado : string = 'S'
    ){}
}
