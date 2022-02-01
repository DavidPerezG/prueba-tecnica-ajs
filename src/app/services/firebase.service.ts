import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private db: AngularFirestore) {}

  getData() {
    return this.db.collection('numbers').snapshotChanges();
  }

  addNumber(number: Number, multiple: Number[]) {
    var object = {
      number,
      multiple,
    };
    return this.db.collection('numbers').add(object);
  }

  updateNumber(id: any, number: any) {
    return this.db.collection('numbers').doc(id).update(number);
  }

  deleteNumber(id: any) {
    return this.db.collection('number').doc(id).delete();
  }
}
