import { Component, OnInit, Input } from '@angular/core';
import { EventService } from '../../_service/event.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private eventService: EventService) { }

  @Input() card$: Card;

  ngOnInit() {
  }

  onCardClick(selectedCard: Card){
    this.eventService.emitChange({id: 'card', card: selectedCard});
  }

}
