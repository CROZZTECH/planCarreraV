import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { ServiceService } from '../services/service.service';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-form1',
  standalone: true,
  imports: [ReactiveFormsModule, HeaderComponent, HttpClientModule, RouterModule],
  templateUrl: './form1.component.html',
  styleUrl: './form1.component.css'
})
export class Form1Component {
  options = [
    {
      "ENTITY": "GRA",
      "POS CODE": "GRA101443",
      "POSITION": "LIDER SR CONSOLIDACION Y ANALISIS",
      "POS EMP GROUP": "EMPLOYEE",
      "COUNTRY": "COL",
      "COMPANY CODE": "GRA-CO01",
      "COMPANY": "GRUPO ARGOS S.A.",
      "GRADE": "GRADO 11",
      "JOB LEVEL": "SPECIALISTS",
      "PERSON ID": 2000005571,
      "EMP FIRST NAME": "ANDRES",
      "EMP MID NAME": "MATEO",
      "EMP LAST NAME": "MARTINEZ",
      "EMP SECOND LAST NAME": "GAVIRIA",
      "EMP HIRE DATE": "08/17/2017",
      "COMPA RATIO": "0,9648794479"
    },
    {
      "ENTITY": "GRA",
      "POS CODE": "GRA101303",
      "POSITION": "LIDER FUSIONES Y ADQUISICIONES",
      "POS EMP GROUP": "EMPLOYEE",
      "COUNTRY": "COL",
      "COMPANY CODE": "GRA-CO01",
      "COMPANY": "GRUPO ARGOS S.A.",
      "GRADE": "GRADO 09",
      "JOB LEVEL": "SPECIALISTS",
      "PERSON ID": 2000033078,
      "EMP FIRST NAME": "ANTONIO",
      "EMP MID NAME": "",
      "EMP LAST NAME": "CASTRILLON",
      "EMP SECOND LAST NAME": "VELASQUEZ",
      "EMP HIRE DATE": "03/21/2023",
      "COMPA RATIO": "0,9421593029"
    },
    {
      "ENTITY": "GRA",
      "POS CODE": "GRA100079",
      "POSITION": "GERENCIA CONSOLIDACION Y ANALISIS",
      "POS EMP GROUP": "EMPLOYEE",
      "COUNTRY": "COL",
      "COMPANY CODE": "GRA-CO01",
      "COMPANY": "GRUPO ARGOS S.A.",
      "GRADE": "GRADO 14",
      "JOB LEVEL": "HIGH MANAGEMENT",
      "PERSON ID": 2000005603,
      "EMP FIRST NAME": "CLAUDIA",
      "EMP MID NAME": "PATRICIA",
      "EMP LAST NAME": "ALVAREZ",
      "EMP SECOND LAST NAME": "AGUDELO",
      "EMP HIRE DATE": "04/01/2016",
      "COMPA RATIO": "1,39232952"
    },
    {
      "ENTITY": "GRA",
      "POS CODE": "GRA100114",
      "POSITION": "GERENCIA PLANEACION FINANCIERA Y RIESGOS",
      "POS EMP GROUP": "EMPLOYEE",
      "COUNTRY": "COL",
      "COMPANY CODE": "GRA-CO01",
      "COMPANY": "GRUPO ARGOS S.A.",
      "GRADE": "GRADO 16",
      "JOB LEVEL": "HIGH MANAGEMENT",
      "PERSON ID": 2000005477,
      "EMP FIRST NAME": "EDUARDO",
      "EMP MID NAME": "",
      "EMP LAST NAME": "SANCHEZ",
      "EMP SECOND LAST NAME": "GOMEZ",
      "EMP HIRE DATE": "04/01/2017",
      "COMPA RATIO": "1,343517503"
    },
    {
      "ENTITY": "GRA",
      "POS CODE": "GRA100083",
      "POSITION": "GERENCIA FINANCIERA NEGOCIO INMOBILIARIO",
      "POS EMP GROUP": "EMPLOYEE",
      "COUNTRY": "COL",
      "COMPANY CODE": "GRA-CO01",
      "COMPANY": "GRUPO ARGOS S.A.",
      "GRADE": "GRADO 14",
      "JOB LEVEL": "HIGH MANAGEMENT",
      "PERSON ID": 2000005879,
      "EMP FIRST NAME": "LUZ",
      "EMP MID NAME": "MARIA",
      "EMP LAST NAME": "VELASQUEZ",
      "EMP SECOND LAST NAME": "BOTERO",
      "EMP HIRE DATE": "06/01/2012",
      "COMPA RATIO": "0,9224781242"
    },
    {
      "ENTITY": "GRA",
      "POS CODE": "GRA100586",
      "POSITION": "VICEPRESIDENCIA ESTRATEGIA Y FINANZAS CORPORATIVAS",
      "POS EMP GROUP": "EMPLOYEE",
      "COUNTRY": "COL",
      "COMPANY CODE": "GRA-CO01",
      "COMPANY": "GRUPO ARGOS S.A.",
      "GRADE": "GRADO CD",
      "JOB LEVEL": "DIRECTIVE COMMITEE",
      "PERSON ID": 2000005583,
      "EMP FIRST NAME": "ALEJANDRO",
      "EMP MID NAME": "",
      "EMP LAST NAME": "PIEDRAHITA",
      "EMP SECOND LAST NAME": "BORRERO",
      "EMP HIRE DATE": "06/01/2015",
      "COMPA RATIO": null
    },
    {
      "ENTITY": "GRA",
      "POS CODE": "GRA100127",
      "POSITION": "GERENCIA ESTRATEGIA FUSIONES Y ADQUISICIONES",
      "POS EMP GROUP": "EMPLOYEE",
      "COUNTRY": "COL",
      "COMPANY CODE": "GRA-CO01",
      "COMPANY": "GRUPO ARGOS S.A.",
      "GRADE": "GRADO 16",
      "JOB LEVEL": "HIGH MANAGEMENT",
      "PERSON ID": 2000029878,
      "EMP FIRST NAME": "MANFRED",
      "EMP MID NAME": "HEINRICH",
      "EMP LAST NAME": "GARTZ",
      "EMP SECOND LAST NAME": "MOISES",
      "EMP HIRE DATE": "01/17/2022",
      "COMPA RATIO": "1,495565902"
    },
    {
      "ENTITY": "GRA",
      "POS CODE": "GRA101098",
      "POSITION": "GERENCIA DE ASUNTOS CORPORATIVOS Y DE PRESIDENCIA",
      "POS EMP GROUP": "EMPLOYEE",
      "COUNTRY": "COL",
      "COMPANY CODE": "GRA-CO01",
      "COMPANY": "GRUPO ARGOS S.A.",
      "GRADE": "GRADO 16",
      "JOB LEVEL": "HIGH MANAGEMENT",
      "PERSON ID": 2000005684,
      "EMP FIRST NAME": "JUAN",
      "EMP MID NAME": "ESTEBAN",
      "EMP LAST NAME": "MEJIA",
      "EMP SECOND LAST NAME": "ARANGO",
      "EMP HIRE DATE": "12/05/2016",
      "COMPA RATIO": "0,9692052449"
    },
    {
      "ENTITY": "GRA",
      "POS CODE": "GRA100591",
      "POSITION": "LIDER SR CONTABLE E IMPUESTOS",
      "POS EMP GROUP": "EMPLOYEE",
      "COUNTRY": "COL",
      "COMPANY CODE": "GRA-CO01",
      "COMPANY": "GRUPO ARGOS S.A.",
      "GRADE": "GRADO 11",
      "JOB LEVEL": "SPECIALISTS",
      "PERSON ID": 2000005667,
      "EMP FIRST NAME": "JUAN",
      "EMP MID NAME": "ESTEBAN",
      "EMP LAST NAME": "ARISTIZABAL",
      "EMP SECOND LAST NAME": "RESTREPO",
      "EMP HIRE DATE": "10/01/2016",
      "COMPA RATIO": "0,9018655328"
    },
    {
      "ENTITY": "GRA",
      "POS CODE": "GRA101280",
      "POSITION": "LIDER SR TESORERIA",
      "POS EMP GROUP": "EMPLOYEE",
      "COUNTRY": "COL",
      "COMPANY CODE": "GRA-CO01",
      "COMPANY": "GRUPO ARGOS S.A.",
      "GRADE": "GRADO 10",
      "JOB LEVEL": "SPECIALISTS",
      "PERSON ID": 2000005503,
      "EMP FIRST NAME": "GLOMER",
      "EMP MID NAME": "",
      "EMP LAST NAME": "BOTERO",
      "EMP SECOND LAST NAME": "BOTERO",
      "EMP HIRE DATE": "10/01/2017",
      "COMPA RATIO": "1,233053419"
    },
    {
      "ENTITY": "GRA",
      "POS CODE": "GRA101305",
      "POSITION": "LIDER FUSIONES Y ADQUISICIONES",
      "POS EMP GROUP": "EMPLOYEE",
      "COUNTRY": "COL",
      "COMPANY CODE": "GRA-CO01",
      "COMPANY": "GRUPO ARGOS S.A.",
      "GRADE": "GRADO 09",
      "JOB LEVEL": "SPECIALISTS",
      "PERSON ID": null,
      "EMP FIRST NAME": null,
      "EMP MID NAME": null,
      "EMP LAST NAME": null,
      "EMP SECOND LAST NAME": null,
      "EMP HIRE DATE": null,
      "COMPA RATIO": null
    },
    {
      "ENTITY": "GRA",
      "POS CODE": "GRA100088",
      "POSITION": "GERENCIA ESTRATEGIA INMOBILIARIA",
      "POS EMP GROUP": "EMPLOYEE",
      "COUNTRY": "COL",
      "COMPANY CODE": "GRA-CO01",
      "COMPANY": "GRUPO ARGOS S.A.",
      "GRADE": "GRADO 14",
      "JOB LEVEL": "HIGH MANAGEMENT",
      "PERSON ID": 2000005758,
      "EMP FIRST NAME": "ERIK",
      "EMP MID NAME": "JOSEPH",
      "EMP LAST NAME": "DUCEY",
      "EMP SECOND LAST NAME": "",
      "EMP HIRE DATE": "12/23/2014",
      "COMPA RATIO": "0,9224781242"
    },
    {
      "ENTITY": "GRA",
      "POS CODE": "GRA100037",
      "POSITION": "LIDER SR PLANEACION FINANCIERA",
      "POS EMP GROUP": "EMPLOYEE",
      "COUNTRY": "COL",
      "COMPANY CODE": "GRA-CO01",
      "COMPANY": "GRUPO ARGOS S.A.",
      "GRADE": "GRADO 10",
      "JOB LEVEL": "SPECIALISTS",
      "PERSON ID": 2000031086,
      "EMP FIRST NAME": "JOSE",
      "EMP MID NAME": "JESUS",
      "EMP LAST NAME": "POSADA",
      "EMP SECOND LAST NAME": "MARTINEZ",
      "EMP HIRE DATE": "11/08/2022",
      "COMPA RATIO": "1,147805679"
    },
    {
      "ENTITY": "GRA",
      "POS CODE": "GRA101344",
      "POSITION": "LIDER PLANEACION FINANCIERA NDU",
      "POS EMP GROUP": "EMPLOYEE",
      "COUNTRY": "COL",
      "COMPANY CODE": "GRA-CO01",
      "COMPANY": "GRUPO ARGOS S.A.",
      "GRADE": "GRADO 08",
      "JOB LEVEL": "SPECIALISTS",
      "PERSON ID": 2000034835,
      "EMP FIRST NAME": "JORGE",
      "EMP MID NAME": "DAVID",
      "EMP LAST NAME": "FLOREZ",
      "EMP SECOND LAST NAME": "YEPEZ",
      "EMP HIRE DATE": "11/01/2023",
      "COMPA RATIO": "0,8773742001"
    },
    {
      "ENTITY": "GRA",
      "POS CODE": "GRA100085",
      "POSITION": "DIRECCION FUSIONES Y ADQUISICIONES",
      "POS EMP GROUP": "EMPLOYEE",
      "COUNTRY": "COL",
      "COMPANY CODE": "GRA-CO01",
      "COMPANY": "GRUPO ARGOS S.A.",
      "GRADE": "GRADO 12",
      "JOB LEVEL": "MIDDLE MANAGEMENT",
      "PERSON ID": 2000005931,
      "EMP FIRST NAME": "MARIA",
      "EMP MID NAME": "ADELAIDA",
      "EMP LAST NAME": "VELASQUEZ",
      "EMP SECOND LAST NAME": "MEJIA",
      "EMP HIRE DATE": "11/01/2016",
      "COMPA RATIO": "1,272772897"
    },
    {
      "ENTITY": "GRA",
      "POS CODE": "GRA101222",
      "POSITION": "DIRECCION PLANEACION FINANCIERA",
      "POS EMP GROUP": "EMPLOYEE",
      "COUNTRY": "COL",
      "COMPANY CODE": "GRA-CO01",
      "COMPANY": "GRUPO ARGOS S.A.",
      "GRADE": "GRADO 12",
      "JOB LEVEL": "MIDDLE MANAGEMENT",
      "PERSON ID": 2000005869,
      "EMP FIRST NAME": "LAURA",
      "EMP MID NAME": "TATIANA",
      "EMP LAST NAME": "SALAMANCA",
      "EMP SECOND LAST NAME": "CARRILLO",
      "EMP HIRE DATE": "08/23/2016",
      "COMPA RATIO": "0,9751413064"
    },
    {
      "ENTITY": "GRA",
      "POS CODE": "GRA101339",
      "POSITION": "LIDER SR PLANEACION FINANCIERA NDU",
      "POS EMP GROUP": "EMPLOYEE",
      "COUNTRY": "COL",
      "COMPANY CODE": "GRA-CO01",
      "COMPANY": "GRUPO ARGOS S.A.",
      "GRADE": "GRADO 10",
      "JOB LEVEL": "SPECIALISTS",
      "PERSON ID": 2000020069,
      "EMP FIRST NAME": "VERONICA",
      "EMP MID NAME": "",
      "EMP LAST NAME": "VELEZ",
      "EMP SECOND LAST NAME": "VALENCIA",
      "EMP HIRE DATE": "01/15/2018",
      "COMPA RATIO": "0,9627239169"
    },
    {
      "ENTITY": "GRA",
      "POS CODE": "GRA100051",
      "POSITION": "DIRECCION PROYECTOS Y TESORERIA",
      "POS EMP GROUP": "EMPLOYEE",
      "COUNTRY": "COL",
      "COMPANY CODE": "GRA-CO01",
      "COMPANY": "GRUPO ARGOS S.A.",
      "GRADE": "GRADO 12",
      "JOB LEVEL": "MIDDLE MANAGEMENT",
      "PERSON ID": 2000030124,
      "EMP FIRST NAME": "LAURA",
      "EMP MID NAME": "VICTORIA",
      "EMP LAST NAME": "ARANGO",
      "EMP SECOND LAST NAME": "HOYOS",
      "EMP HIRE DATE": "02/14/2022",
      "COMPA RATIO": "1,211338995"
    },
    {
      "ENTITY": "GRA",
      "POS CODE": "GRA100063",
      "POSITION": "LIDER CONSOLIDACION Y ANALISIS",
      "POS EMP GROUP": "EMPLOYEE",
      "COUNTRY": "COL",
      "COMPANY CODE": "GRA-CO01",
      "COMPANY": "GRUPO ARGOS S.A.",
      "GRADE": "GRADO 09",
      "JOB LEVEL": "SPECIALISTS",
      "PERSON ID": 2000005984,
      "EMP FIRST NAME": "PAULA",
      "EMP MID NAME": "ANDREA",
      "EMP LAST NAME": "YEPES",
      "EMP SECOND LAST NAME": "ALZATE",
      "EMP HIRE DATE": "11/01/2013",
      "COMPA RATIO": "1,223975542"
    },
    {
      "ENTITY": "GRA",
      "POS CODE": "GRA100126",
      "POSITION": "LIDER CONSOLIDACION Y ANALISIS",
      "POS EMP GROUP": "EMPLOYEE",
      "COUNTRY": "COL",
      "COMPANY CODE": "GRA-CO01",
      "COMPANY": "GRUPO ARGOS S.A.",
      "GRADE": "GRADO 09",
      "JOB LEVEL": "SPECIALISTS",
      "PERSON ID": 2000005923,
      "EMP FIRST NAME": "MAURICIO",
      "EMP MID NAME": "ANDRES",
      "EMP LAST NAME": "RESTREPO",
      "EMP SECOND LAST NAME": "JARAMILLO",
      "EMP HIRE DATE": "06/01/2012",
      "COMPA RATIO": "1,394405641"
    },
    {
      "ENTITY": "GRA",
      "POS CODE": "GRA100007",
      "POSITION": "DIRECCION CONSOLIDACION Y ANALISIS",
      "POS EMP GROUP": "EMPLOYEE",
      "COUNTRY": "COL",
      "COMPANY CODE": "GRA-CO01",
      "COMPANY": "GRUPO ARGOS S.A.",
      "GRADE": "GRADO 13",
      "JOB LEVEL": "MIDDLE MANAGEMENT",
      "PERSON ID": 2000005720,
      "EMP FIRST NAME": "DIANA",
      "EMP MID NAME": "PATRICIA",
      "EMP LAST NAME": "DUQUE",
      "EMP SECOND LAST NAME": "TIRADO",
      "EMP HIRE DATE": "11/15/2016",
      "COMPA RATIO": "1,093060872"
    },
    {
      "ENTITY": "GRA",
      "POS CODE": "GRA101216",
      "POSITION": "DIRECCION FUSIONES Y ADQUISICIONES",
      "POS EMP GROUP": "EMPLOYEE",
      "COUNTRY": "COL",
      "COMPANY CODE": "GRA-CO01",
      "COMPANY": "GRUPO ARGOS S.A.",
      "GRADE": "GRADO 12",
      "JOB LEVEL": "MIDDLE MANAGEMENT",
      "PERSON ID": 2000031821,
      "EMP FIRST NAME": "EDUARDO",
      "EMP MID NAME": "",
      "EMP LAST NAME": "ESCOBAR",
      "EMP SECOND LAST NAME": "ESCOBAR",
      "EMP HIRE DATE": "09/19/2022",
      "COMPA RATIO": "1,057572482"
    },
    {
      "ENTITY": "GRA",
      "POS CODE": "GRA100029",
      "POSITION": "LIDER CONSOLIDACION Y ANALISIS",
      "POS EMP GROUP": "EMPLOYEE",
      "COUNTRY": "COL",
      "COMPANY CODE": "GRA-CO01",
      "COMPANY": "GRUPO ARGOS S.A.",
      "GRADE": "GRADO 09",
      "JOB LEVEL": "SPECIALISTS",
      "PERSON ID": 2000032933,
      "EMP FIRST NAME": "KELLY",
      "EMP MID NAME": "CATHERINE",
      "EMP LAST NAME": "LOPEZ",
      "EMP SECOND LAST NAME": "SARRAZOLA",
      "EMP HIRE DATE": "03/01/2023",
      "COMPA RATIO": "1,223975542"
    },
    {
      "ENTITY": "GRA",
      "POS CODE": "GRA100032",
      "POSITION": "LIDER CONSOLIDACION Y ANALISIS",
      "POS EMP GROUP": "EMPLOYEE",
      "COUNTRY": "COL",
      "COMPANY CODE": "GRA-CO01",
      "COMPANY": "GRUPO ARGOS S.A.",
      "GRADE": "GRADO 09",
      "JOB LEVEL": "SPECIALISTS",
      "PERSON ID": null,
      "EMP FIRST NAME": null,
      "EMP MID NAME": null,
      "EMP LAST NAME": null,
      "EMP SECOND LAST NAME": null,
      "EMP HIRE DATE": null,
      "COMPA RATIO": null
    },
    {
      "ENTITY": "GRA",
      "POS CODE": "GRA100041",
      "POSITION": "LIDER CONSOLIDACION Y ANALISIS",
      "POS EMP GROUP": "EMPLOYEE",
      "COUNTRY": "COL",
      "COMPANY CODE": "GRA-CO01",
      "COMPANY": "GRUPO ARGOS S.A.",
      "GRADE": "GRADO 09",
      "JOB LEVEL": "SPECIALISTS",
      "PERSON ID": 2000005915,
      "EMP FIRST NAME": "MARIA",
      "EMP MID NAME": "ELENA",
      "EMP LAST NAME": "MORENO",
      "EMP SECOND LAST NAME": "POSADA",
      "EMP HIRE DATE": "08/01/2015",
      "COMPA RATIO": "1,223975542"
    }
  ];
  jobForm: FormGroup = new FormGroup({});
  id: number = 0;
  
  constructor(
    private service: ServiceService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute) { 
    this.jobForm = this.fb.group({
      job : new FormControl(''),
      company : new FormControl(''),
      entity : new FormControl(''),
      TechniquesLevel1: this.fb.array([]),
      softLevel1: this.fb.array([]),
      experienceLevel1: this.fb.array([]),
      performanceLevel1: this.fb.array([]),
      educationLevel1: this.fb.array([]),
  });
  this.setSelectValue();
  const id = this.route.snapshot.paramMap.get('id');
  if (id) {
    this.id = parseInt(id);
    this.service.getJob(parseInt(id)).subscribe((data: any) => {
      console.log(data);
      this.arrayTechniquesLevel1(data.TechniquesLevel1);
      this.arraySoftLevel1(data.softLevel1);
      this.arrayExperienceLevel1(data.experienceLevel1);
      this.arrayPerformanceLevel1(data.performanceLevel1);
      this.arrayEducationLevel1(data.educationLevel1);
      this.jobForm.patchValue(data);
    });
  }
}
  
  createField(value: string): FormGroup {
    return this.fb.group({
      name: new FormControl(''),
      level1 : new FormControl(value),
      level2 : new FormControl(value),
      level3 : new FormControl(value),
    });
  }


  
  get TechniquesLevel1() {
    return this.jobForm.get('TechniquesLevel1') as FormArray;
  }

  
  
  addTechniquesLevel1() {
    this.TechniquesLevel1.push(this.createField('Bajo'));
  }
  
  removeTechniquesLevel1(index: number) {
    this.TechniquesLevel1.removeAt(index);
  }
  


  arrayTechniquesLevel1(data: any[]) {
    data.map((item: { name: string, level1: string, level2: string, level3: string }) => {

      this.TechniquesLevel1.push(this.fb.group(
        {
          name   : new FormControl(item.name), 
          level1 : new FormControl(item.level1),
          level2 : new FormControl(item.level2),
          level3 : new FormControl(item.level3),
        }
      ));

    });
  }
  

  
  //-----------------------------------


  get softLevel1() {
    return this.jobForm.get('softLevel1') as FormArray;
  }

  arraySoftLevel1(data: any[]) {
    data.map((item: { name: string, level1: string, level2: string, level3: string }) => {

      this.softLevel1.push(this.fb.group(
        {
          name: new FormControl(item.name), 
          level1 : new FormControl(item.level1),
          level2 : new FormControl(item.level2),
          level3 : new FormControl(item.level3),
          
        }
      ));

    });
  }

  addSoftLevel1() {
    this.softLevel1.push(this.createField('Uso excesivo'));
  }

  removeSoftLevel1(index: number) {
    this.softLevel1.removeAt(index);
  }


  //-----------------------------------


  get experienceLevel1() {
    return this.jobForm.get('experienceLevel1') as FormArray;
  }

  arrayExperienceLevel1(data: any[]) {
    data.map((item: { name: string, level1: string, level2: string, level3: string }) => {

      this.experienceLevel1.push(this.fb.group(
        {
          name: new FormControl(item.name), 
          level1 : new FormControl(item.level1),
          level2 : new FormControl(item.level2),
          level3 : new FormControl(item.level3),
          
        }
      ));

    });
  }

  addExperienceLevel1() {
    this.experienceLevel1.push(this.createField('Entre 1 y  3 años'));
  }

  removeExperienceLevel1(index: number) {
    this.experienceLevel1.removeAt(index);
  }


  //-----------------------------------


  get performanceLevel1() {
    return this.jobForm.get('performanceLevel1') as FormArray;
  }

  arrayPerformanceLevel1(data: any[]) {
    data.map((item: { name: string, level1: string, level2: string, level3: string }) => {

      this.performanceLevel1.push(this.fb.group(
        {
          name: new FormControl(item.name), 
          level1 : new FormControl(item.level1),
          level2 : new FormControl(item.level2),
          level3 : new FormControl(item.level3),
          
        }
      ));

    });
  }

  addPerformanceLevel1() {
    this.performanceLevel1.push(this.createField('Desempeño sobresaliente A9'));
  }

  removePerformanceLevel1(index: number) {
    this.performanceLevel1.removeAt(index);
  }

  //-----------------------------------

  get educationsLevel1() {
    return this.jobForm.get('educationLevel1') as FormArray;
  }

  arrayEducationLevel1(data: any[]) {
    data.map((item: { name: string, level1: string, level2: string, level3: string }) => {

      this.educationsLevel1.push(this.fb.group(
        {
          name: new FormControl(item.name), 
          level1 : new FormControl(item.level1),
          level2 : new FormControl(item.level2),
          level3 : new FormControl(item.level3),
          
        }
      ));

    });
  }

  addEducationLevel1() {
    this.educationsLevel1.push(this.createField(''));
  }

  removeEducationLevel1(index: number) {
    this.educationsLevel1.removeAt(index);
  }
  

  onSubmit() {
    console.warn(this.jobForm.value);
    let formValue = this.jobForm.value;
    formValue.id = this.id;
    // Set default values if they don't exist
    formValue.TechniquesLevel1  = formValue.TechniquesLevel1 || [];
    formValue.softLevel1        = formValue.softLevel1 || [];
    formValue.experienceLevel1  = formValue.experienceLevel1 || [];
    formValue.performanceLevel1 = formValue.performanceLevel1 || [];
    formValue.educationLevel1   = formValue.educationLevel1 || [];

    if(formValue.id != null && formValue.id != '' && formValue.id != 0){


      console.log('putJob', formValue);
      delete formValue.id;
      this.service.putJob(formValue, this.id ).subscribe({
        next: (response:any) => {
          console.log(response);
          window.open(`${environment.apiUrl}/jobs/excel/${response.id}`, '_blank');
          this.router.navigate(['/table']);
        },
        error: (error) => {
          console.log(error);
        }
      });

    }else{
      delete formValue.id;
      this.service.postJob(formValue).subscribe({
        next: (response:any) => {
          console.log(response);
          
          this.router.navigate(['/table']);
        },
        error: (error) => {
          console.log(error);
        }
      });

    }    
  }

  setSelectValue() {
    if (this.jobForm && this.jobForm.get('job')) {
      const jobControl = this.jobForm.get('job');
      if (jobControl) {
        const selectedJob = jobControl.value;
        jobControl.valueChanges.subscribe((selectedJob:string) => {
          let selectedOptions = this.options.find(option => option.POSITION === selectedJob);
          
          
          if (selectedOptions) {
            this.jobForm.patchValue({
              company: selectedOptions.COMPANY,
              entity: selectedOptions.ENTITY
            });
          }
        });
      }
    }
  }

  getJobValue() {
    if (this.jobForm) {
      const jobControl = this.jobForm.get('job');
      return jobControl ? jobControl.value : null;
    }
    return null;
  }
}
