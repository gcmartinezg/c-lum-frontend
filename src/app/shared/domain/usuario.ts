export class Usuario {
    constructor(
        public usuarioId : number,
        public nDocumento : string,
        public tDocId : number,
        public contrasena : string,
        public tUsuarioId: number,
        public estado : string = 'S'
    ){}
}
