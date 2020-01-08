import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class WaitlistService {
  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>;

  constructor(private firebase: AngularFirestore) {
    this.itemsCollection = firebase.collection<any>("planningLists");
    this.items = this.itemsCollection.valueChanges();
    this.items.subscribe(e => console.log(e));
  }

  getWaitlistFromHall(hallNumber) {
    this.firebase
      .collection("planningLists", ref => ref.where("store", "==", "Ñuble"))
      .valueChanges();
  }
}
