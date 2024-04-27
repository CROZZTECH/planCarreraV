import { Component, OnInit, Pipe } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { environment } from '../../environments/environment.development';
import { RouterModule } from '@angular/router';
import {  FormControl, ReactiveFormsModule } from '@angular/forms';
import { saveAs } from 'file-saver';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { HeaderComponent } from '../header/header.component';


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
      "POS_CODE": "GRA100591",
      "POSITION": "LIDER SR CONTABLE E IMPUESTOS",
      "POS_EMP_GROUP": "EMPLOYEE",
      "COUNTRY": "COL",
      "COMPANY_CODE": "GRA-CO01",
      "COMPANY": "GRUPO ARGOS S.A.",
      "BUSINESS_UNIT_CODE": "GRA80000003",
      "BUSINESS_UNIT": "VICEPRESIDENCIA ESTRATEGIA Y FINANZAS CORPORATIVAS",
      "DIVISION_CODE": "GRA70000014",
      "DIVISION": "GERENCIA CONSOLIDACION FINANCIERA",
      "DIVISION_II_CODE": "",
      "DIVISION_II": "",
      "GRADE": "GRADO 11",
      "SALARY_GRADE": "11",
      "MATRIX_MANAGER_POSITION": "123",
      "PERSON_ID": "1152184653",
      "NATIONAL_ID": "ACTIVE",
      "EMPLOYEE_STATUS": "EMPLOYEE",
      "EMPLOYEE_GROUP": "ADMINISTRATIVE",
      "EMPLOYEE_SUBGROUP": "",
      "EMP_FIRST_NAME": "JUAN",
      "EMP_MID_NAME": "ESTEBAN",
      "EMP_LAST_NAME": "ARISTIZABAL",
      "EMP_SECOND_LAST_NAME": "RESTREPO",
      "EMP_DISPLAY_NAME": "JUAN",
      "EMP_DATE_OF_BIRTH": "11/23/1989",
      "EMP_HIRE_DATE": "10/01/2016",
      "EMP_ORIGINAL_START_DATE": "10/01/2016",
      "EMP_GENDER": "M",
      "FREQ": "17.05333",
      "COMPA_RATIO": "0.901865533"
    },
    {
      "ENTITY": "GRA",
      "POS_CODE": "GRA101443",
      "POSITION": "LIDER SR CONSOLIDACION Y ANALISIS",
      "POS_EMP_GROUP": "EMPLOYEE",
      "COUNTRY": "COL",
      "COMPANY_CODE": "GRA-CO01",
      "COMPANY": "GRUPO ARGOS S.A.",
      "BUSINESS_UNIT_CODE": "GRA80000003",
      "BUSINESS_UNIT": "VICEPRESIDENCIA ESTRATEGIA Y FINANZAS CORPORATIVAS",
      "DIVISION_CODE": "GRA70000014",
      "DIVISION": "GERENCIA CONSOLIDACION FINANCIERA",
      "DIVISION_II_CODE": "",
      "DIVISION_II": "",
      "GRADE": "GRADO 11",
      "SALARY_GRADE": "11",
      "MATRIX_MANAGER_POSITION": "12222",
      "PERSON_ID": "1128475002",
      "NATIONAL_ID": "ACTIVE",
      "EMPLOYEE_STATUS": "EMPLOYEE",
      "EMPLOYEE_GROUP": "ADMINISTRATIVE",
      "EMPLOYEE_SUBGROUP": "",
      "EMP_FIRST_NAME": "ANDRES",
      "EMP_MID_NAME": "MATEO",
      "EMP_LAST_NAME": "MARTINEZ",
      "EMP_SECOND_LAST_NAME": "GAVIRIA",
      "EMP_DISPLAY_NAME": "ANDRES",
      "EMP_DATE_OF_BIRTH": "09/27/1990",
      "EMP_HIRE_DATE": "08/17/2017",
      "EMP_ORIGINAL_START_DATE": "08/17/2017",
      "EMP_GENDER": "M",
      "FREQ": "17.05333",
      "COMPA_RATIO": "0.964879448"
    },
    {
      "ENTITY": "CEM",
      "POS_CODE": "CEM116688",
      "POSITION": "ESTUDIANTE DE PRACTICA",
      "POS_EMP_GROUP": "APPRENTICE",
      "COUNTRY": "COL",
      "COMPANY_CODE": "CEM-CO05",
      "COMPANY": "CONCRETOS ARGOS S.A.S.",
      "BUSINESS_UNIT_CODE": "CEM80000003",
      "BUSINESS_UNIT": "VICEPRESIDENCIA REGIONAL COLOMBIA",
      "DIVISION_CODE": "CEM70000052",
      "DIVISION": "GERENCIA PERSONAS REGIONAL COLOMBIA",
      "DIVISION_II_CODE": "",
      "DIVISION_II": "",
      "GRADE": "GRADO 00",
      "SALARY_GRADE": "0",
      "MATRIX_MANAGER_POSITION": "1321212",
      "PERSON_ID": "1001577407",
      "NATIONAL_ID": "ACTIVE",
      "EMPLOYEE_STATUS": "APPRENTICE",
      "EMPLOYEE_GROUP": "PRACTICUM STUDENTS",
      "EMPLOYEE_SUBGROUP": "OPERATIVE UNIONIZED",
      "EMP_FIRST_NAME": "CRISTINA",
      "EMP_MID_NAME": "",
      "EMP_LAST_NAME": "ROSERO",
      "EMP_SECOND_LAST_NAME": "ALZATE",
      "EMP_DISPLAY_NAME": "CRISTINA ROSERO ALZATE",
      "EMP_DATE_OF_BIRTH": "03/02/2002",
      "EMP_HIRE_DATE": "11/14/2023",
      "EMP_ORIGINAL_START_DATE": "",
      "EMP_GENDER": "F",
      "FREQ": "",
      "COMPA_RATIO": ""
    },
    {
      "ENTITY": "ODI",
      "POS_CODE": "ODI102487",
      "POSITION": "PROFESIONAL BIM VIAS EDMAX",
      "POS_EMP_GROUP": "EMPLOYEE",
      "COUNTRY": "COL",
      "COMPANY_CODE": "ODI-CO06",
      "COMPANY": "ODINSA AEROPUERTOS S.A.S.",
      "BUSINESS_UNIT_CODE": "ODI80000005",
      "BUSINESS_UNIT": "VICEPRESIDENCIA CONCESIONES AEROPORTUARIAS",
      "DIVISION_CODE": "ODI70000152",
      "DIVISION": "GERENCIA TECNICA",
      "DIVISION_II_CODE": "",
      "DIVISION_II": "",
      "GRADE": "GRADO 08",
      "SALARY_GRADE": "8",
      "MATRIX_MANAGER_POSITION": "1212",
      "PERSON_ID": "1014227222",
      "NATIONAL_ID": "ACTIVE",
      "EMPLOYEE_STATUS": "EMPLOYEE",
      "EMPLOYEE_GROUP": "ADMINISTRATIVE",
      "EMPLOYEE_SUBGROUP": "",
      "EMP_FIRST_NAME": "DANIEL",
      "EMP_MID_NAME": "ENRIQUE",
      "EMP_LAST_NAME": "GARAVITO",
      "EMP_SECOND_LAST_NAME": "DIVANTOQUE",
      "EMP_DISPLAY_NAME": "DANIEL ENRIQUE GARAVITO DIVANTOQUE",
      "EMP_DATE_OF_BIRTH": "11/04/1991",
      "EMP_HIRE_DATE": "08/08/2023",
      "EMP_ORIGINAL_START_DATE": "08/08/2023",
      "EMP_GENDER": "M",
      "FREQ": "14.12",
      "COMPA_RATIO": ""
    },
    {
      "ENTITY": "CEM",
      "POS_CODE": "CEM105219",
      "POSITION": "CONDUCTOR(A) MIXER",
      "POS_EMP_GROUP": "EMPLOYEE",
      "COUNTRY": "COL",
      "COMPANY_CODE": "CEM-CO05",
      "COMPANY": "CONCRETOS ARGOS S.A.S.",
      "BUSINESS_UNIT_CODE": "CEM80000003",
      "BUSINESS_UNIT": "VICEPRESIDENCIA REGIONAL COLOMBIA",
      "DIVISION_CODE": "CEM70003021",
      "DIVISION": "GERENCIA ZC",
      "DIVISION_II_CODE": "",
      "DIVISION_II": "",
      "GRADE": "GRADO 00",
      "SALARY_GRADE": "0",
      "MATRIX_MANAGER_POSITION": "3113131",
      "PERSON_ID": "80251284",
      "NATIONAL_ID": "",
      "EMPLOYEE_STATUS": "ACTIVE",
      "EMPLOYEE_GROUP": "EMPLOYEE",
      "EMPLOYEE_SUBGROUP": "OPERATIVE UNIONIZED",
      "EMP_FIRST_NAME": "JAVIER",
      "EMP_MID_NAME": "AUGUSTO",
      "EMP_LAST_NAME": "CELEITA",
      "EMP_SECOND_LAST_NAME": "VILLALBA",
      "EMP_DISPLAY_NAME": "JAVIER",
      "EMP_DATE_OF_BIRTH": "11/10/1984",
      "EMP_HIRE_DATE": "02/22/2014",
      "EMP_ORIGINAL_START_DATE": "02/22/2014",
      "EMP_GENDER": "M",
      "FREQ": "14.95333",
      "COMPA_RATIO": ""
    },
    {
      "ENTITY": "CLS",
      "POS_CODE": "CLS10007187",
      "POSITION": "LIDER GESTION MULTISERVICIOS Y HOGAR MAS",
      "POS_EMP_GROUP": "EMPLOYEE",
      "COUNTRY": "COL",
      "COMPANY_CODE": "CLS-CO07",
      "COMPANY": "CELSIA COLOMBIA S.A. E.S.P.",
      "BUSINESS_UNIT_CODE": "CLS80000004",
      "BUSINESS_UNIT": "COMERCIAL",
      "DIVISION_CODE": "CLS70000067",
      "DIVISION": "DESARROLLO DE PRODUCTO",
      "DIVISION_II_CODE": "",
      "DIVISION_II": "",
      "GRADE": "GRADO 11",
      "SALARY_GRADE": "11",
      "MATRIX_MANAGER_POSITION": "",
      "PERSON_ID": "12121213",
      "NATIONAL_ID": "1088286657",
      "EMPLOYEE_STATUS": "ACTIVE",
      "EMPLOYEE_GROUP": "EMPLOYEE",
      "EMPLOYEE_SUBGROUP": "ADMINISTRATIVE UNIONIZED",
      "EMP_FIRST_NAME": "JUAN",
      "EMP_MID_NAME": "SEBASTIAN",
      "EMP_LAST_NAME": "BECERRA",
      "EMP_SECOND_LAST_NAME": "CIFUENTES",
      "EMP_DISPLAY_NAME": "JUAN",
      "EMP_DATE_OF_BIRTH": "02/25/1991",
      "EMP_HIRE_DATE": "10/15/2019",
      "EMP_ORIGINAL_START_DATE": "10/15/2019",
      "EMP_GENDER": "M",
      "FREQ": "17.19",
      "COMPA_RATIO": "1.086273649"
    }];
  items$:Observable<any> = this.service.getJobs();
  selectedOption = new FormControl('');
  id:number = 0;
  apiUrl:string = environment.apiUrl;
  constructor(private service: ServiceService)  {
      
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

}
