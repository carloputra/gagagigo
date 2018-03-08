import { Component, OnInit, HostListener } from '@angular/core';
import { FirestoreService } from '../_service/firestore.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { DragulaService } from 'ng2-dragula';

import { Card } from '../_model/card';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {

  cardsSubscription: Subscription;

  trunk$: Card[] = [];
  deck$: Card[] = [];

  cardWidth$;
  cardHeight$;

  constructor(private firestore: FirestoreService, private dragulaService: DragulaService) {

    dragulaService.setOptions('dirt-bag', {
      copy: true,
    });

    dragulaService.dropModel.subscribe((value) => {
      this.onDropModel(value.slice(1));
    });
    dragulaService.removeModel.subscribe((value) => {
      this.onRemoveModel(value.slice(1));
    });
  }

  private onDropModel(args) {
    let [el, target, source] = args;
    console.log('deck', this.deck$);
    // do something else
  }

  private onRemoveModel(args) {
    let [el, source] = args;
    // do something else
  }

  ngOnInit() {

    let self = this;

    this.cardsSubscription = this.firestore.getAllCards().subscribe((cards) => {
      self.trunk$ = cards;
      self.deck$.push(self.trunk$[0]);
    });

    let deckComponentWidth = document.getElementById('deckComponent').clientWidth;
    let cardContainerWidth = (deckComponentWidth - 14) / 2
    this.setContainerWidth(cardContainerWidth, cardContainerWidth);

    this.setCardDimension();

  }

  ngOnDestroy() {
    this.cardsSubscription.unsubscribe();
  }

  setCardDimension() {

    let container = document.getElementById('card-grid');
    let width = container.clientWidth / 5;

    this.cardWidth$ = Math.floor(width) + "px";
    this.cardHeight$ = Math.floor(width * 89 / 62) + "px";
  }

  setContainerWidth(trunkWidth: number, deckWidth: number){

    let trunkContainer = document.getElementById('trunkContainer');
    trunkContainer.style.width = trunkWidth + "px";
    
    let deckContainer = document.getElementById('deckContainer');
    deckContainer.style.width = deckWidth + "px";
  }


  private last: MouseEvent;

  private mouseDown: boolean = false;

  @HostListener('mousemove', ['$event'])
  onMousemove(event: MouseEvent) {
    if (this.mouseDown) {
      let diffX = this.last.clientX - event.clientX;
      this.last = event;
      this.setContainerWidthOffset(diffX);
    }
  }

  setContainerWidthOffset(offsetX){

    let trunkContainer = document.getElementById('trunkContainer');
    let deckContainer = document.getElementById('deckContainer');

    this.setContainerWidth(trunkContainer.clientWidth - offsetX, deckContainer.clientWidth + offsetX);
  }

  onMousedown(event) {
    this.mouseDown = true;
    this.last = event;
  }

  onMouseup() {
    this.mouseDown = false;
  }

}
