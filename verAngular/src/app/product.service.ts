import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { ProductIterfase } from './model/productIterfase';
import { Observable } from 'rxjs';
import { CarIterfase } from './model/carIterfase';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productCollection: AngularFirestoreCollection <ProductIterfase>;
  product : Observable<ProductIterfase[]>
  productDoc: AngularFirestoreDocument<ProductIterfase>;

  constructor(public afs: AngularFirestore) {
    this.productCollection = this.afs.collection<ProductIterfase>('productos');
    this.product = this.productCollection.snapshotChanges().pipe(
        map(actions => actions.map(a=>{
          const data = a.payload.doc.data() as ProductIterfase;
          const id = a.payload.doc.id;
          return {id, ...data};
        }))
    );
   }

  productos(texto):Observable<any>{
    var cadenaNombre = "";
    var cadenaCompara = "";
    this.productCollection = this.afs.collection<ProductIterfase>('productos');
    this.product = this.productCollection.snapshotChanges().pipe(
        map(actions => actions.map(a=>{
          const data = a.payload.doc.data() as ProductIterfase;
          cadenaNombre = data.nombre.toLowerCase();
          cadenaCompara = texto.toLowerCase();
          if(cadenaNombre.indexOf(cadenaCompara) != -1){
          const dataReal = a.payload.doc.data() as ProductIterfase;
          const id = a.payload.doc.id;
          return {id, ...dataReal};
          }
        }))
    );

    return this.product;
  }

  productosItemId(id):Observable<any>{
    this.productCollection = this.afs.collection<ProductIterfase>('productos');
    this.product = this.productCollection.snapshotChanges().pipe(
        map(actions => actions.map(a=>{
          const data = a.payload.doc.data() as ProductIterfase;
          if(a.payload.doc.id == id){
          const dataReal = a.payload.doc.data() as ProductIterfase;
          const id = a.payload.doc.id;
          return {id, ...dataReal};
          }
        }))
    );

    return this.product;
  }

  pagoProducto(product: ProductIterfase, cantidad):Promise<any>{
    var mensaje= new Array();
    return new Promise((respuesta, err)=>{
      this.productDoc = this.afs.doc(`productos/${product.id}`);
      this.productDoc.update(product);
      mensaje[0]= "Correcto";
      mensaje[1] = "Producto: " +product.nombre + "  cantidad: "+ cantidad+ "\n";
      respuesta(mensaje)
    })
  }
}
