// import {Injectable} from '@angular/core';
// import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
// import {Angebot} from '../models/Course';
// import {Observable} from 'rxjs';
// import {first, map} from 'rxjs/operators';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class CourseService {
//   cartCollection: AngularFirestoreCollection<Angebot>;
//   cartDoc: AngularFirestoreDocument<Angebot>;
//   carts: Observable<Angebot[]>;
//   cart: Observable<Angebot>;
//
//   constructor(private afs: AngularFirestore) {
//     // this.courseCollection = this.afs.collection<Course>('courses');
//     this.cartCollection = this.afs.collection<Angebot>('courses');
//   }
//
//   getCourses(): Promise<Angebot[]> {
//     this.carts = this.cartCollection.snapshotChanges().pipe(
//       map(actions => actions.map(action => {
//         const courseData = action.payload.doc.data() as Angebot;
//         courseData.id = action.payload.doc.id;
//         return courseData;
//       }))
//       , first());
//     return this.carts.toPromise();
//   }
//
//   getCourse(courseId: string): Promise<Angebot> {
//     this.cartDoc = this.afs.doc<Angebot>(`courses/${courseId}`);
//     this.cart = this.cartDoc.snapshotChanges().pipe(
//       map(action => {
//         if (!action.payload.exists) {
//           return null;
//         } else {
//           const courseData = action.payload.data() as Angebot;
//           courseData.id = action.payload.id;
//           return courseData;
//         }
//       })
//       , first());
//     return this.cart.toPromise();
//   }
//
//   createCourse(course: Angebot) {
//     const courseData = JSON.parse(JSON.stringify(course));
//     return this.cartCollection.add(courseData);
//   }
//
//   updateCourse(course: Angebot) {
//     this.cartDoc = this.afs.doc<Angebot>(`courses/${course.id}`);
//     const courseData = JSON.parse(JSON.stringify(course));
//     return this.cartDoc.update(courseData);
//   }
//
//   deleteCourse(course: Angebot) {
//     this.cartDoc = this.afs.doc<Angebot>(`courses/${course.id}`);
//     return this.cartDoc.delete();
//   }
// }
