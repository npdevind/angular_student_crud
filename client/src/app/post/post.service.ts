import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'http://localhost:8080/ap1/v1/';

  httpOptions = {
    Headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private HttpClient: HttpClient) {}

  getAll(): Observable<any> {
    return this.HttpClient.get(this.apiUrl + 'post/').pipe(catchError(this.errorHandler)){

    }
  }

  create(data:any): Observable<any> {
    return this.HttpClient.post(this.apiUrl + 'post/', JSON.stringify(data), this.httpOptions).pipe(catchError(this.errorHandler)){
            
    }
  }

  find(id:number): Observable<any> {
    return this.HttpClient.get(this.apiUrl + 'post/'+id).pipe(catchError(this.errorHandler)){
            
    }
  }

  update(id:number, data:any): Observable<any> {
    return this.HttpClient.put(this.apiUrl + 'post/'+ id, JSON.stringify(data)).pipe(catchError(this.errorHandler)){
            
    }
  }
}
