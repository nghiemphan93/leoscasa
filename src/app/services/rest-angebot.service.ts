import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';

import {Observable} from 'rxjs';
import {first, map} from 'rxjs/operators';
import {Angebot} from '../models/Angebot';

@Injectable({
  providedIn: 'root'
})
export class RestAngebotService {
  angebotCollection: AngularFirestoreCollection<Angebot>;
  angebotDoc: AngularFirestoreDocument<Angebot>;
  angebots: Observable<Angebot[]>;
  angebot: Observable<Angebot>;

  constructor(private afs: AngularFirestore) {
    // this.courseCollection = this.afs.collection<Course>('courses');
    this.angebotCollection = this.afs.collection<Angebot>('angebots');
  }

  getAngebots(): Promise<Angebot[]> {
    this.angebots = this.angebotCollection.snapshotChanges().pipe(
      map(actions => actions.map(action => {
        const angebotData = action.payload.doc.data() as Angebot;
        angebotData.id = action.payload.doc.id;
        return angebotData;
      }))
      , first());
    return this.angebots.toPromise();
  }

  getAngebot(angebotId: string): Promise<Angebot> {
    this.angebotDoc = this.afs.doc<Angebot>(`angebots/${angebotId}`);
    this.angebot = this.angebotDoc.snapshotChanges().pipe(
      map(action => {
        if (!action.payload.exists) {
          return null;
        } else {
          const angebotData = action.payload.data() as Angebot;
          angebotData.id = action.payload.id;
          return angebotData;
        }
      })
      , first());
    return this.angebot.toPromise();
  }

  createAngebot(angebot: Angebot) {
    const angebotData = JSON.parse(JSON.stringify(angebot));
    return this.angebotCollection.add(angebotData);
  }

  updateAngebot(angebot: Angebot) {
    this.angebotDoc = this.afs.doc<Angebot>(`angebots/${angebot.id}`);
    const angebotData = JSON.parse(JSON.stringify(angebot));
    return this.angebotDoc.update(angebotData);
  }

  deleteAngebot(angebot: Angebot) {
    this.angebotDoc = this.afs.doc<Angebot>(`angebots/${angebot.id}`);
    return this.angebotDoc.delete();
  }
}
