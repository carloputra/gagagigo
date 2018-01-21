import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSlider } from '@angular/material';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor() { }

  cards$: {}[] = [];

  @ViewChild('cardSizeSlider') cardSizeSlider$: MatSlider;

  ngOnInit() {
    for (let i = 0; i < 41; i++) {

      let type = '#ffbf00'; //monster

      let random = Math.floor(Math.random() * 10) + 1
      switch (random) {
        case 5:
          type = '#00A86B'; //spell
          break;
        case 6:
          type = '#7c5299'; //trap
          break;
        case 7:
          type = '#007ba7'; //link
          break;
        case 8:
          type = '#cccccc'; //synchro
          break;
        case 8:
          type = '#363636'; //xyz
          break;
      }

      this.cards$.push({ id: i, type: type });
    }

    this.cardSizeSlider$.registerOnChange((value) => {
      this.onCardSizeSliderChanged(value);
    });

    let self = this;

    window.addEventListener('resize', function(){
      self.updateCardGridCols();
    }, true);

  }

  matGridOptions$: { cols: number, rowHeight: string} = {
    cols: 10,
    rowHeight: '10:14',
  };

  cardWidth: number = 50;

  onCardSizeSliderChanged(value: any) {

    switch (value.toString()) {
      case '1':
        this.cardWidth = 50;
        break;
      case '2':
      this.cardWidth = 100;
        break;
      case '3':
      this.cardWidth = 150;
        break;
      case '4':
      this.cardWidth = 200;
        break;
      case '5':
      this.cardWidth = 250;
        break;
    }
    
    this.updateCardGridCols();
  }

  updateCardGridCols(){

    let cols = 0;
    cols = document.getElementById('card-grid').clientWidth / this.cardWidth;

    cols = Math.floor(cols);

    this.matGridOptions$.cols = cols;
  }

}
