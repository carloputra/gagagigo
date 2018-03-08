import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Card} from '../_model/card';
import { CardApiary } from '../_model/cardApiary';


import 'rxjs/add/operator/map';


@Injectable()
export class CardService {

  selected_card: Card = new Card();
  selected_image_path: string;

  constructor(private http: HttpClient) { }

  getCards() {
    return this.http.get<Card[]>('/api/cards/');
  }

  searchCards(query) {
    return this.http.get<Card[]>('/api/cards/' + query);
  }

  getCard(card_name) {
    return this.http.get<Card>('/api/card/' + card_name);
  }

  getCardApiary(card_name) {
    return this.http.get<CardApiary>('https://www.ygohub.com/api/card_info?name=' + card_name);
  }

}