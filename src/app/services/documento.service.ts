import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Documento } from '../models/documento';


@Injectable({
  providedIn: 'root'
})
export class DocumentoService {
  url = 'http://localhost:8090/user_information/';

  constructor(private http: HttpClient) { }

  // Método para obtener información del usuario
  agregarDocumento(identificationType: string, userId: string): Observable<any> {
    const userUrl = `${this.url}identification_type/${identificationType}/identification/${userId}`;
    return this.http.get(userUrl);
  }
}
