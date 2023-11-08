// ropa-RopaArtesanalService.service.spec.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArtisanService {
  private apiUrl = 'http://localhost:3000/ropa-artesanal';

  constructor(private http: HttpClient) {}
  getRopas(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getRopaPorId(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url);
  }
}
