import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private apiKey: string = '37353465-d98680daf37085f5b5a8bf944'

  http = inject(HttpClient);

  getImage(pais: string): Observable<string> {
    const params = new HttpParams()
      .set('key', this.apiKey)
      .set('q', pais)
      .set('per_page', '3');

    const baseUrl = 'https://pixabay.com/api/'

    return this.http.get(baseUrl, { params }).pipe(map((response: any) => {
      if (response.hits.length > 0) {
        return response.hits[0].webformatURL;
      } else {
        return 'https://www.eclosio.ong/wp-content/uploads/2018/08/default.png';
      }
    }),
      catchError(() => {
        return of('https://www.eclosio.ong/wp-content/uploads/2018/08/default.png');
      })
    );
  }
}
