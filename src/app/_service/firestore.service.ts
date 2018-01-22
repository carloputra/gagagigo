import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable()
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  initializeCrawler(array: any){
    this.firestore.collection('crawler').doc('apiary').set(array)
    .then(() =>{ console.log('success'); })
    .catch((error) =>{ console.log('error', error); })
  }

  upsertCard(card: Card){
    this.firestore.collection('cards').doc(card.number.toString()).set(card, {merge: true}).then(() => {console.log('success'); })
  }

  getAllCards(): Observable<any>{
    return this.firestore.collection('cards').valueChanges();
  }

}
