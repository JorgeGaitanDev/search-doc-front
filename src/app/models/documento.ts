export class Documento {
  _id?: string;
  tipo_documento: string;
  num_documento: number;


  constructor(tipo_documento: string, num_documento: number) {
      this.tipo_documento = tipo_documento;
      this.num_documento = num_documento;
  }
}
