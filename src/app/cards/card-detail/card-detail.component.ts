import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CardService } from '../../_service/card.service';
import { Card } from '../../_model/card';


@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

  @Input() card: Card;

  image_path: string;

  constructor() { }

  ngOnInit() {
  }

}
