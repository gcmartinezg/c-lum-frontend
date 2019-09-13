export class Canalizacion {

    constructor(
        public canalizacionId: number,
        public lamparaId: number,
        public tipoZonaId: number,
        public tipoSoporteId: number,
        public cajaInspeccion: string,
        public ducteria: string
    ){}
}
