import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonApiService {

  constructor(private http: HttpClient) { }
  getData() {
    var URL = "https://randomuser.me/api/?results=20&amp;inc=name,picture,id,cell&amp;nat=in";
    return this.http.get(URL).pipe(map(responseData => {
      return responseData;
    }));
  }


}
