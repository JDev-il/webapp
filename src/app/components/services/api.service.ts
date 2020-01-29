import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _api:HttpClient) { }

  headers(){
    const headers = new HttpHeaders().set('Content-Type', 'text/html')
    return headers
  }

  public getJsonData(){
    return this._api.post("http://localhost:8080/api/db.php", {headers: this.headers()})
    
  }

}
