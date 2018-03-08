import { Component, OnInit, Input } from '@angular/core';

import { EventService } from '../../_service/event.service';

import { CardService } from '../../_service/card.service';
import { Card } from '../../_model/card';
import { CardApiary } from '../../_model/cardApiary';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  thumbnail_path: string = "";
  image_path: string = "";

  constructor(private api: CardService, private eventService: EventService) { }

  @Input() card: Card;

  ngOnInit() {
    this.api.getCardApiary(this.card.name).subscribe(res => {
      if (res.status == "success") {
        this.thumbnail_path = res.card.thumbnail_path;
        this.image_path = res.card.image_path;
      }
    });
  }

  onCardClick(selectedCard: Card) {
    // this.eventService.emitChange({ id: 'card', card: selectedCard, image_path: this.image_path });
    // this.api.selected_card = this.card;

    this.api.getCard(this.card.name).subscribe(card => {
      this.api.selected_card = card;
    });
    this.api.selected_image_path = this.image_path;
  }

}
