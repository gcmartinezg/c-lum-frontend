import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/shared/domain/usuario';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { EstadoService } from 'src/app/shared/services/estado.service';
import { Estado } from 'src/app/shared/domain/estado';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    public showMenu: string;
    public showAdmin: boolean = false;
    public showCoordinador:boolean = false;
    public arregloEstados : Estado[] = [];

    usuario: Usuario = new Usuario("",null,"",null, null);

    constructor(
        public usuarioService: UsuarioService,
        public estadoService: EstadoService
    ) {}

    ngOnInit() {
        this.showMenu = '';
        //console.log('local', localStorage.getItem('usuario'));
        this.getUsuario();
    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    getUsuario(){
        this.usuarioService.findById(localStorage.getItem('usuario')).subscribe(
            data=>{
                this.usuario = data;
                console.log(data);
                if(this.usuario.tipoUsuarioId_TipoUsuario == 1){
                    this.showAdmin = true;
                }
                if(this.usuario.tipoUsuarioId_TipoUsuario == 2){
                    this.showCoordinador = true;
                }
            }, error=>{
                console.log(error.error.mensaje);
            });
    }

    getEstados(){
        this.estadoService.findAll().subscribe(response=>{
            this.arregloEstados = response;
        }, reject=>{
            console.log(reject.error.mensaje);
        });
    }
}
