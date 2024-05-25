import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuarioSource = new BehaviorSubject({
    firstName: '',
    secondName: '',
    firstSurname: '',
    secondSurname: '',
    phone: 0,
    address: '',
    cityResident: ''
  });
  currentUsuario = this.usuarioSource.asObservable();

  constructor() { }

  changeUsuario(usuario: any) {
    this.usuarioSource.next(usuario);
  }
}
