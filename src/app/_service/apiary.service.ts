import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiaryService {

  constructor(private httpClient: HttpClient) { }

  getListNewCards(): Observable<any>{
    return this.httpClient.get("https://www.ygohub.com/api/new_cards?num_cards=20");
  }

  getCardInfo(cardName: string): Observable<any>{

    cardName = encodeURI(cardName);
    return this.httpClient.get("https://www.ygohub.com/api/card_info?name=" + cardName);
  } 


  getListAllCards(): Observable<any>{
    return this.httpClient.get("https://www.ygohub.com/api/all_cards");
  }

}
