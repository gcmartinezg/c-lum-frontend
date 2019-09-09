export class Canalizacion {

    constructor(
        public canalizacionId: number,
        public lamparaId: number,
        public tZonaId: number,
        public tSoporteId: number,
        public cajaInspeccion: string,
        public ducteria: string
    ){}
}
