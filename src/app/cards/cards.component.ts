import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSlider } from '@angular/material';
import { ApiaryService } from '../_service/apiary.service';
import { forEach } from '@angular/router/src/utils/collection';
import { FirestoreService } from '../_service/firestore.service';
import { Subscription } from 'rxjs/Subscription';
import { EventService } from '../_service/event.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(private apiary: ApiaryService, private firestore: FirestoreService, private eventService: EventService) { }

  cardWidth$: number = 50;

  cards$: Card[] = [];
  selectedCard$: Card;

  matGridOptions$: { cols: number, rowHeight: string} = {
    cols: 10,
    rowHeight: '10:14',
  };

  @ViewChild('cardSizeSlider') cardSizeSlider$: MatSlider;

  eventSubscription$: Subscription;

  ngOnInit() {
    
    let self = this;

    this.initializeCards();

    this.eventSubscription$ = this.eventService.changeEmitted$.subscribe((event) =>{
      if(event.id == 'card'){
        
        self.selectedCard$ = event.card;

      }
    });
    
    this.cardSizeSlider$.registerOnChange((value) => {
      this.onCardSizeSliderChanged(value);
    });

    window.addEventListener('resize', function(){
      self.updateCardGridCols();
    }, true);
  }

  ngOnDestroy(){
    this.eventSubscription$.unsubscribe();
  }

  initializeCards(){

    let self = this;

    this.firestore.getAllCards().subscribe((result) => {
      result.forEach(element => {        
        self.cards$.push((<Card>element));
      });
    });
  }

  onButtonClick(){

  }

  onCardSizeSliderChanged(value: any) {

    let minWidth = 50;
    let maxWidth = 250;
    let stepperWidth = (250 - 50) / 100;

    this.cardWidth$ = (stepperWidth * value) + minWidth;
    
    
    this.updateCardGridCols();
  }

  updateCardGridCols(){

    let cols = 0;
    cols = document.getElementById('card-grid').clientWidth / this.cardWidth$;

    cols = Math.floor(cols);

    this.matGridOptions$.cols = cols;
  }

}
