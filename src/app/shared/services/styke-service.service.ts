import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StykeServiceService {

  private readonly URL = environment.api_style;


  constructor(private http: HttpClient) { }

  getStylesAndTypes(gender_name: string): Observable<any> {
    return this.http.get(`${this.URL}/${gender_name}`).pipe(
      map((res: any) => {
        console.log("Styles and types: ", res);
        return res;
      }),
      catchError((err) => {
        alert('Error de conexion');
        const { status, statusText } = err;
        console.log('Algo paso revisar', [status, statusText]);
        return of([]);
      })
    );
  }
}
