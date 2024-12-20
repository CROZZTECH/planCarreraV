import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  postJob(job: any) {
    return this.http.post(`${environment.apiUrl}/jobs`, job);
  }

  putJob(job: any, id: number) {
    return this.http.put(`${environment.apiUrl}/jobs/${id}`, job);
  }

  getJobsExcel() {
    return this.http.get(`${environment.apiUrl}/jobs/excel`);
  }

  getJobs() {
    return this.http.get(`${environment.apiUrl}/jobs`);
  }

  postJobsExcel(job: any) {
    return this.http.post(`${environment.apiUrl}/jobs/excel`, job, { responseType: 'arraybuffer' });
  }

  uploadFile(file: any) {
    return this.http.post(`${environment.apiUrl}/uploadFile`, file);
  }

  uploadInfFile(file: any) {
    return this.http.post(`${environment.apiUrl}/uploadInfFile`, file);
  }

  getListFiles(file: string) {
    return this.http.get(`${environment.apiUrl}/list-files?folder_path=${file}`);
  }

  uploadUpdateForma(file: any) {
    return this.http.post(`${environment.apiUrl}/jobs/excelForma`, file);
  }

  deleteJob(id: number) {
    return this.http.delete(`${environment.apiUrl}/jobs/${id}`);
  }

  getJob(id: number) {
    return this.http.get(`${environment.apiUrl}/jobs/${id}`);
  }

}
