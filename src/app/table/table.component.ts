import { Component, OnDestroy, OnInit, Pipe } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { environment } from '../../environments/environment.development';
import { Router, RouterModule } from '@angular/router';
import {  FormControl, ReactiveFormsModule } from '@angular/forms';
import { saveAs } from 'file-saver';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { HeaderComponent } from '../header/header.component';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, AsyncPipe, HeaderComponent ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  data = [
    {
      "ENTITY": "GRA",
      "POSITION": "LIDER SR CONTABLE E IMPUESTOS",
      "COMPANY": "GRUPO ARGOS S.A.",
      "PERSON_ID": "2000005667",
      "EMP_FIRST_NAME": "JUAN",
      "EMP_MID_NAME": "ESTEBAN",
      "EMP_LAST_NAME": "ARISTIZABAL",
      "EMP_SECOND_LAST_NAME": "RESTREPO",
      "COMPA_RATIO": "82"
    },
    {
      "ENTITY": "GRA",
      "POSITION": "DIRECCION PROYECTOS Y TESORERIA",
      "COMPANY": "GRUPO ARGOS S.A.",
      "PERSON_ID": "2000030124",
      "EMP_FIRST_NAME": "LAURA",
      "EMP_MID_NAME": "VICTORIA",
      "EMP_LAST_NAME": "ARANGO",
      "EMP_SECOND_LAST_NAME": "HOYOS",
      "COMPA_RATIO": "113"
    },
    {
      "ENTITY": "GRA",
      "POSITION": "VICEPRESIDENCIA ESTRATEGIA Y FINANZAS CORPORATIVAS",
      "COMPANY": "GRUPO ARGOS S.A.",
      "PERSON_ID": "2000005583",
      "EMP_FIRST_NAME": "ALEJANDRO",
      "EMP_MID_NAME": "",
      "EMP_LAST_NAME": "PIEDRAHITA",
      "EMP_SECOND_LAST_NAME": "BORRERO",
      "COMPA_RATIO": "0"
    },
    {
      "ENTITY": "GRA",
      "POSITION": "LIDER CONSOLIDACION Y ANALISIS",
      "COMPANY": "GRUPO ARGOS S.A.",
      "PERSON_ID": "2000005915",
      "EMP_FIRST_NAME": "MARIA",
      "EMP_MID_NAME": "ELENA",
      "EMP_LAST_NAME": "MORENO",
      "EMP_SECOND_LAST_NAME": "POSADA",
      "COMPA_RATIO": "111"
    },
    {
      "ENTITY": "GRA",
      "POSITION": "LIDER SR PLANEACION FINANCIERA NDU",
      "COMPANY": "GRUPO ARGOS S.A.",
      "PERSON_ID": "2000020069",
      "EMP_FIRST_NAME": "VERONICA",
      "EMP_MID_NAME": "",
      "EMP_LAST_NAME": "VELEZ",
      "EMP_SECOND_LAST_NAME": "VALENCIA",
      "COMPA_RATIO": "88"
    },
    {
      "ENTITY": "GRA",
      "POSITION": "LIDER SR PLANEACION FINANCIERA",
      "COMPANY": "GRUPO ARGOS S.A.",
      "PERSON_ID": "2000031086",
      "EMP_FIRST_NAME": "JOSE",
      "EMP_MID_NAME": "JESUS",
      "EMP_LAST_NAME": "POSADA",
      "EMP_SECOND_LAST_NAME": "MARTINEZ",
      "COMPA_RATIO": "104"
    },
    {
      "ENTITY": "GRA",
      "POSITION": "LIDER SR TESORERIA",
      "COMPANY": "GRUPO ARGOS S.A.",
      "PERSON_ID": "2000005503",
      "EMP_FIRST_NAME": "GLOMER",
      "EMP_MID_NAME": "",
      "EMP_LAST_NAME": "BOTERO",
      "EMP_SECOND_LAST_NAME": "BOTERO",
      "COMPA_RATIO": "112"
    },
    {
      "ENTITY": "GRA",
      "POSITION": "LIDER SR CONSOLIDACION Y ANALISIS",
      "COMPANY": "GRUPO ARGOS S.A.",
      "PERSON_ID": "2000005571",
      "EMP_FIRST_NAME": "ANDRES",
      "EMP_MID_NAME": "MATEO",
      "EMP_LAST_NAME": "MARTINEZ",
      "EMP_SECOND_LAST_NAME": "GAVIRIA",
      "COMPA_RATIO": "88"
    },
    {
      "ENTITY": "GRA",
      "POSITION": "GERENCIA DE ASUNTOS CORPORATIVOS Y DE PRESIDENCIA",
      "COMPANY": "GRUPO ARGOS S.A.",
      "PERSON_ID": "2000005684",
      "EMP_FIRST_NAME": "JUAN",
      "EMP_MID_NAME": "ESTEBAN",
      "EMP_LAST_NAME": "MEJIA",
      "EMP_SECOND_LAST_NAME": "ARANGO",
      "COMPA_RATIO": "91"
    },
    {
      "ENTITY": "GRA",
      "POSITION": "GERENCIA CONSOLIDACION Y ANALISIS",
      "COMPANY": "GRUPO ARGOS S.A.",
      "PERSON_ID": "2000005603",
      "EMP_FIRST_NAME": "CLAUDIA",
      "EMP_MID_NAME": "PATRICIA",
      "EMP_LAST_NAME": "ALVAREZ",
      "EMP_SECOND_LAST_NAME": "AGUDELO",
      "COMPA_RATIO": "132"
    },
    {
      "ENTITY": "GRA",
      "POSITION": "DIRECCION FUSIONES Y ADQUISICIONES",
      "COMPANY": "GRUPO ARGOS S.A.",
      "PERSON_ID": "2000002353",
      "EMP_FIRST_NAME": "LUIS",
      "EMP_MID_NAME": "MIGUEL",
      "EMP_LAST_NAME": "ECHEVERRI",
      "EMP_SECOND_LAST_NAME": "ACOSTA",
      "COMPA_RATIO": "102"
    },
    {
      "ENTITY": "GRA",
      "POSITION": "LIDER CONSOLIDACION Y ANALISIS",
      "COMPANY": "GRUPO ARGOS S.A.",
      "PERSON_ID": "2000005984",
      "EMP_FIRST_NAME": "PAULA",
      "EMP_MID_NAME": "ANDREA",
      "EMP_LAST_NAME": "YEPES",
      "EMP_SECOND_LAST_NAME": "ALZATE",
      "COMPA_RATIO": "111"
    },
    {
      "ENTITY": "GRA",
      "POSITION": "LIDER CONSOLIDACION Y ANALISIS",
      "COMPANY": "GRUPO ARGOS S.A.",
      "PERSON_ID": "2000005923",
      "EMP_FIRST_NAME": "MAURICIO",
      "EMP_MID_NAME": "ANDRES",
      "EMP_LAST_NAME": "RESTREPO",
      "EMP_SECOND_LAST_NAME": "JARAMILLO",
      "COMPA_RATIO": "127"
    },
    {
      "ENTITY": "GRA",
      "POSITION": "LIDER CONSOLIDACION Y ANALISIS",
      "COMPANY": "GRUPO ARGOS S.A.",
      "PERSON_ID": "2000032933",
      "EMP_FIRST_NAME": "KELLY",
      "EMP_MID_NAME": "CATHERINE",
      "EMP_LAST_NAME": "LOPEZ",
      "EMP_SECOND_LAST_NAME": "SARRAZOLA",
      "COMPA_RATIO": "111"
    },
    {
      "ENTITY": "GRA",
      "POSITION": "DIRECCION PLANEACION FINANCIERA",
      "COMPANY": "GRUPO ARGOS S.A.",
      "PERSON_ID": "2000005869",
      "EMP_FIRST_NAME": "LAURA",
      "EMP_MID_NAME": "TATIANA",
      "EMP_LAST_NAME": "SALAMANCA",
      "EMP_SECOND_LAST_NAME": "CARRILLO",
      "COMPA_RATIO": "91"
    },
    {
      "ENTITY": "GRA",
      "POSITION": "GERENCIA ESTRATEGIA INMOBILIARIA",
      "COMPANY": "GRUPO ARGOS S.A.",
      "PERSON_ID": "2000005758",
      "EMP_FIRST_NAME": "ERIK",
      "EMP_MID_NAME": "JOSEPH",
      "EMP_LAST_NAME": "DUCEY",
      "EMP_SECOND_LAST_NAME": "",
      "COMPA_RATIO": "87"
    },
    {
      "ENTITY": "GRA",
      "POSITION": "GERENCIA FINANCIERA NEGOCIO INMOBILIARIO",
      "COMPANY": "GRUPO ARGOS S.A.",
      "PERSON_ID": "2000005879",
      "EMP_FIRST_NAME": "LUZ",
      "EMP_MID_NAME": "MARIA",
      "EMP_LAST_NAME": "VELASQUEZ",
      "EMP_SECOND_LAST_NAME": "BOTERO",
      "COMPA_RATIO": "87"
    },
    {
      "ENTITY": "GRA",
      "POSITION": "GERENCIA PLANEACION FINANCIERA Y RIESGOS",
      "COMPANY": "GRUPO ARGOS S.A.",
      "PERSON_ID": "2000005477",
      "EMP_FIRST_NAME": "EDUARDO",
      "EMP_MID_NAME": "",
      "EMP_LAST_NAME": "SANCHEZ",
      "EMP_SECOND_LAST_NAME": "GOMEZ",
      "COMPA_RATIO": "126"
    },
    {
      "ENTITY": "GRA",
      "POSITION": "GERENCIA ESTRATEGIA FUSIONES Y ADQUISICIONES",
      "COMPANY": "GRUPO ARGOS S.A.",
      "PERSON_ID": "2000029878",
      "EMP_FIRST_NAME": "MANFRED",
      "EMP_MID_NAME": "HEINRICH",
      "EMP_LAST_NAME": "GARTZ",
      "EMP_SECOND_LAST_NAME": "MOISES",
      "COMPA_RATIO": "140"
    },
    {
      "ENTITY": "GRA",
      "POSITION": "DIRECCION CONSOLIDACION Y ANALISIS",
      "COMPANY": "GRUPO ARGOS S.A.",
      "PERSON_ID": "2000005720",
      "EMP_FIRST_NAME": "DIANA",
      "EMP_MID_NAME": "PATRICIA",
      "EMP_LAST_NAME": "DUQUE",
      "EMP_SECOND_LAST_NAME": "TIRADO",
      "COMPA_RATIO": "104"
    },
    {
      "ENTITY": "GRA",
      "POSITION": "LIDER FUSIONES Y ADQUISICIONES",
      "COMPANY": "GRUPO ARGOS S.A.",
      "PERSON_ID": "2000033078",
      "EMP_FIRST_NAME": "ANTONIO",
      "EMP_MID_NAME": "",
      "EMP_LAST_NAME": "CASTRILLON",
      "EMP_SECOND_LAST_NAME": "VELASQUEZ",
      "COMPA_RATIO": "86"
    },
    {
      "ENTITY": "GRA",
      "POSITION": "LIDER PLANEACION FINANCIERA NDU",
      "COMPANY": "GRUPO ARGOS S.A.",
      "PERSON_ID": "2000034835",
      "EMP_FIRST_NAME": "JORGE",
      "EMP_MID_NAME": "DAVID",
      "EMP_LAST_NAME": "FLOREZ",
      "EMP_SECOND_LAST_NAME": "YEPEZ",
      "COMPA_RATIO": "80"
    },
    {
      "ENTITY": "GRA",
      "POSITION": "LIDER GESTION INTEGRAL DE RIESGOS",
      "COMPANY": "GRUPO ARGOS S.A.",
      "PERSON_ID": "2000033077",
      "EMP_FIRST_NAME": "DANIEL",
      "EMP_MID_NAME": "ESTEBAN",
      "EMP_LAST_NAME": "GALLEGO",
      "EMP_SECOND_LAST_NAME": "ESCOBAR",
      "COMPA_RATIO": "80"
    }
  ];
  items$:Observable<any> = this.service.getJobs();
  selectedOption = new FormControl('');
  selectedOptionId = new FormControl('');
  selectedOptionInf:String = '';
  id:number = 0;
  apiUrl:string = environment.apiUrl;
  files: any = {};
  constructor(
    private service: ServiceService,
    private authService: AuthService,
    private router: Router)  {

  }

  ngOnInit() {
    this.selectedOption.valueChanges.subscribe(value => {

      let filteredData = this.data.filter(item => item["PERSON_ID"] == value);

      console.log('selectedOption ha cambiado a:', filteredData[0], this.id);
      const job = { "id" : this.id, ...filteredData[0] };
      this.service.postJobsExcel(job).subscribe((data: any) => {
        let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        let url = window.URL.createObjectURL(blob);
        window.open(url);
    });
  });


  this.items$ = this.service.getJobs();

}

delete(id:number) {
  this.service.deleteJob(id).subscribe((data: any) => {
    console.log(data);
  });
}

onFileChange(event:any) {
  let file = event.target.files[0];
  let formData = new FormData();
  formData.append('file', file);
  this.service.uploadFile(formData).subscribe((data: any) => {
    console.log(data);
  });
}

onSelectChange(id: string, idF : number) {
  this.selectedOptionInf = id;
  this.service.getListFiles(id).subscribe((data: any) => {
    let urls: any[] = [];
    data.forEach((item: any) => {
      urls.push({
        name: item,
        url: `${this.apiUrl}/uploads/${id}/${item}`,
        id: id
      });
    });
    this.files = {"urls": urls, "id": idF}; ;
    console.log(this.files);
  });

}


onFileInfChange(event:any) {
  let file = event.target.files[0];
  let formData = new FormData();
  formData.append('file', file);
  formData.append('selectedOptionId', this.selectedOptionInf.toString());
  this.service.uploadInfFile(formData).subscribe((data: any) => {
    console.log(data);
  });
}



updateForma(event:any, id:number){

  let file = event.target.files[0];
  let formData = new FormData();
  formData.append('file', file);
  formData.append('id', id.toString());
  this.service.uploadUpdateForma(formData).subscribe((data: any) => {
    console.log(data);
  });
}
}
