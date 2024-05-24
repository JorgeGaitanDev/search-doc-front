import { Documento } from './../../models/documento';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DocumentoService } from 'src/app/services/documento.service';

@Component({
  selector: 'app-buscar-documento',
  templateUrl: './buscar-documento.component.html',
  styleUrls: ['./buscar-documento.component.css']
})
export class BuscarDocumentoComponent implements OnInit {
  documentoForm: FormGroup;
  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _documentoService: DocumentoService,
              private aRouter: ActivatedRoute) {
    this.documentoForm = this.fb.group({
      tipo_documento: ['', Validators.required],
      num_documento:  ['', [Validators.required, Validators.minLength(8), Validators.maxLength(11), Validators.pattern('^[0-9]*$')]]
    })
   }

  ngOnInit(): void {
  }

  agregarDocumento() {
    if (this.documentoForm.valid) {
    console.log(this.documentoForm)
    const DOCUMENTO: Documento = {
      tipo_documento: this.documentoForm.get('tipo_documento')?.value,
      num_documento: this.documentoForm.get('num_documento')?.value,
    }
    console.log(DOCUMENTO);
    this.toastr.info('Se ha encontrado la información básica', 'Búsqueda Exitosa!');
    this.router.navigate(['/info-documento']);
  } else {
    this.documentoForm.markAllAsTouched(); // Marcar todos los controles como tocados para activar mensajes de validación

  }
  }
}
