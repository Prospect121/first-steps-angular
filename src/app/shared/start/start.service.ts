import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StartService {
  private api = environment.api;
  private movie = environment.path.movie;

  constructor(private http: HttpClient) {}

  getMovieAll(): Observable<any> {
    return this.http.get<any>(`${this.api}${this.movie}`);
  }
}
