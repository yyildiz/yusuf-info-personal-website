import { contactUrl } from './../consts/urls.const';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http: HttpClient) {}

  postMessage(input: any) {
    const formData = new FormData();
    formData.append('your-name', input['your-name']);
    formData.append('your-email', input['your-email']);
    formData.append('your-message', input['your-message']);
    return this.http.post(contactUrl, formData).pipe(
      map(
        (response) => {
          if (response) {
            return response;
          }
        },
        (error: any) => {
          return error;
        }
      )
    );
  }
}
