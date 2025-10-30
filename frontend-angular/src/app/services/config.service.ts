import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface AppConfig {
  siteTitle: string;
  contactEmail?: string;
  error?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(private http: HttpClient) {}

  getConfig(): Observable<AppConfig> {
    return this.http.get<AppConfig>('/api/config').pipe(
      catchError((err) => {
        return throwError(
          () => new Error(err?.error?.error || 'Failed to load configuration')
        );
      })
    );
  }
}
