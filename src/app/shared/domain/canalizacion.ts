export class Canalizacion {

    constructor(
        public canalizacionId: number,
        public lamparaId_Lampara: number,
        public tipoZonaId_TipoZona: number,
        public tipoSoporteId: number,
        public cajaInspeccion: string,
        public ducteria: string,
        public idEstado_Estado: number
    ){}
}
