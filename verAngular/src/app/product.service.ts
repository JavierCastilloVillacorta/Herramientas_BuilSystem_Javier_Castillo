import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { ProductIterfase } from './model/productIterfase';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productCollection: AngularFirestoreCollection <ProductIterfase>;
  product : Observable<ProductIterfase[]>
  productDoc: AngularFirestoreDocument<ProductIterfase>;


  constructor(public afs: AngularFirestore) {
    this.productCollection = afs.collection<ProductIterfase>('productos');
    this.product = this.productCollection.snapshotChanges().pipe(
        map(actions => actions.map(a=>{
          const data = a.payload.doc.data() as ProductIterfase;
          const id = a.payload.doc.id;
          return {id, ...data};
        }))
    );


  //  this.product = afs.collection('productos').valueChanges();
   }

   getProducto(){
     return this.product;
   }
}
