import { Documento } from './../../models/documento';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DocumentoService } from 'src/app/services/documento.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-buscar-documento',
  templateUrl: './buscar-documento.component.html',
  styleUrls: ['./buscar-documento.component.css']
})
export class BuscarDocumentoComponent implements OnInit {

    usuario: {
      firstName: string,
      secondName: string,
      firstSurname: string,
      secondSurname: string,
      phone: number,
      address: string,
      cityResident: string
    } = {
      firstName: '',
      secondName: '',
      firstSurname: '',
      secondSurname: '',
      phone: 0,
      address: '',
      cityResident: ''
    };

  documentoForm: FormGroup;
  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _documentoService: DocumentoService,
              private aRouter: ActivatedRoute,
              private http: HttpClient) {
  this.documentoForm = this.fb.group({
      tipo_documento: ['', Validators.required],
      num_documento:  ['', [Validators.required, Validators.minLength(8), Validators.maxLength(11), Validators.pattern('^[0-9]*$')]]
    })
   }

  ngOnInit(): void {
  }

  agregarDocumento(): void {
    if (this.documentoForm.valid) {
      const tipo_documento = this.documentoForm.get('tipo_documento')?.value;
      const num_documento = this.documentoForm.get('num_documento')?.value;

      // Construir la URL con los valores del formulario
      const url = `http://localhost:8090/user_information/identification_type/${tipo_documento}/identification/${num_documento}`;

      // Hacer la petición GET a la URL construida
      this.http.get<any>(url).subscribe((response: any) => {
        this.usuario = response;
        this.router.navigate(['/info-documento']);
      }, (error: any) => {
        console.error(error);
      });
    } else {
      this.documentoForm.markAllAsTouched();
    }
  }
}
