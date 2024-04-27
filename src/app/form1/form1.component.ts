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
      "ENTITY": "CEM",
      "POS CODE": "CEM123508",
      "POSITION": "DIRECTOR(A) GENERAL CARIBE",
      "POS EMP GROUP": "EMPLOYEE",
      "COUNTRY": "DOM",
      "COMPANY CODE": "CEM-DO00",
      "COMPANY": "ARGOS DOMINICANA S.A."
    },
    {
      "ENTITY": "ODI",
      "POS CODE": "ODI100431",
      "POSITION": "GERENTE GENERAL",
      "POS EMP GROUP": "EMPLOYEE",
      "COUNTRY": "COL",
      "COMPANY CODE": "ODI-CO02",
      "COMPANY": "OPAIN S.A."
    },
    {
      "ENTITY": "CEM",
      "POS CODE": "CEM126496",
      "POSITION": "DIRECTOR(A) GENERAL CENTROAMERICA",
      "POS EMP GROUP": "EMPLOYEE",
      "COUNTRY": "PAN",
      "COMPANY CODE": "CEM-PA04",
      "COMPANY": "ARGOS PANAMA S.A."
    },
    {
      "ENTITY": "ODI",
      "POS CODE": "ODI100054",
      "POSITION": "GERENTE GESTION DE ACTIVOS",
      "POS EMP GROUP": "EMPLOYEE",
      "COUNTRY": "COL",
      "COMPANY CODE": "ODI-CO01",
      "COMPANY": "ODINSA S.A"
    },
    {
      "ENTITY": "CEM",
      "POS CODE": "CEM113295",
      "POSITION": "LIDER ESTRATEGIA",
      "POS EMP GROUP": "EMPLOYEE",
      "COUNTRY": "COL",
      "COMPANY CODE": "CEM-CO02",
      "COMPANY": "CEMENTOS ARGOS S.A."
    },
    {
      "ENTITY": "CEM",
      "POS CODE": "CEM109471",
      "POSITION": "GERENTE(A) AW",
      "POS EMP GROUP": "EMPLOYEE",
      "COUNTRY": "COL",
      "COMPANY CODE": "CEM-CO02",
      "COMPANY": "CEMENTOS ARGOS S.A."
    },
    {
      "ENTITY": "CEM",
      "POS CODE": "CEM129696",
      "POSITION": "GERENTE(A) TRANSFORMACION",
      "POS EMP GROUP": "EMPLOYEE",
      "COUNTRY": "COL",
      "COMPANY CODE": "CEM-CO02",
      "COMPANY": "CEMENTOS ARGOS S.A."
    },
    {
      "ENTITY": "CEM",
      "POS CODE": "CEM131278",
      "POSITION": "ANALISTA GESTION PROYECTOS",
      "POS EMP GROUP": "EMPLOYEE",
      "COUNTRY": "COL",
      "COMPANY CODE": "CEM-CO02",
      "COMPANY": "CEMENTOS ARGOS S.A."
    },
    {
      "ENTITY": "ODI",
      "POS CODE": "ODI102108",
      "POSITION": "LIDER DE PRESUPUESTO Y PROGRAMACION EDMAX",
      "POS EMP GROUP": "EMPLOYEE",
      "COUNTRY": "COL",
      "COMPANY CODE": "ODI-CO01",
      "COMPANY": "ODINSA S.A"
    },
    {
      "ENTITY": "GRA",
      "POS CODE": "GRA100583",
      "POSITION": "PRESIDENCIA",
      "POS EMP GROUP": "EMPLOYEE",
      "COUNTRY": "COL",
      "COMPANY CODE": "GRA-CO01",
      "COMPANY": "GRUPO ARGOS S.A."
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
  });
  this.setSelectValue();
  const id = this.route.snapshot.paramMap.get('id');
  if (id) {
    this.id = parseInt(id);
    this.service.getJob(parseInt(id)).subscribe((data: any) => {
      console.log(data);
      this.arrayTechniquesLevel1(data.TechniquesLevel1);
      this.arraySoftLevel1(data.softLevel1);
      this.jobForm.patchValue(data);
    });
  }
}
  
  createField(): FormGroup {
    return this.fb.group({
      name: new FormControl(),
      level : new FormControl(),
    });
  }


  
  get TechniquesLevel1() {
    return this.jobForm.get('TechniquesLevel1') as FormArray;
  }

  arrayTechniquesLevel1(data: any[]) {
    data.map((item: { name: string }) => {

      this.TechniquesLevel1.push(this.fb.group(
        {
          name: new FormControl([item.name]), 
        }
      ));

    });
  }
  
  addTechniquesLevel1() {
    this.TechniquesLevel1.push(this.createField());
  }
  
  removeTechniquesLevel1(index: number) {
    this.TechniquesLevel1.removeAt(index);
  }
  
  get TechniquesLevel2() {
    return this.jobForm.get('TechniquesLevel2') as FormArray;
  }

  arrayTechniquesLevel2(data: any[]) {
    data.map((item: { name: string }) => {

      this.TechniquesLevel2.push(this.fb.group(
        {
          name: new FormControl([item.name]), 
        }
      ));

    });
  }
  

  
  //-----------------------------------


  get softLevel1() {
    return this.jobForm.get('softLevel1') as FormArray;
  }

  arraySoftLevel1(data: any[]) {
    data.map((item: { name: string }) => {

      this.softLevel1.push(this.fb.group(
        {
          name: new FormControl([item.name]), 
        }
      ));

    });
  }

  addSoftLevel1() {
    this.softLevel1.push(this.createField());
  }

  removeSoftLevel1(index: number) {
    this.softLevel1.removeAt(index);
  }

  

  onSubmit() {
    console.warn(this.jobForm.value);
    let formValue = this.jobForm.value;
    formValue.id = this.id;
    // Set default values if they don't exist
    formValue.TechniquesLevel1 = formValue.TechniquesLevel1 || [];
    formValue.softLevel1       = formValue.softLevel1 || [];

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
