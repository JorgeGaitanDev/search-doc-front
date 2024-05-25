import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario_service';

@Component({
  selector: 'app-info-documento',
  templateUrl: './info-documento.component.html',
  styleUrls: ['./info-documento.component.css']
})
export class InfoDocumentoComponent implements OnInit {
  usuario: any;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.currentUsuario.subscribe(usuario => this.usuario = usuario);
  }

}
