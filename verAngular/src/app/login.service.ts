import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { UsuIterfase } from './model/usuIterfase';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})

export class LoginService {
  usuCollection: AngularFirestoreCollection <UsuIterfase>;
  usuario: Observable<UsuIterfase[]>;
  usuDoc: AngularFirestoreDocument<UsuIterfase>;


  constructor(public afs: AngularFirestore) {
/*
    //this.usuario = afs.collection('usuario').valueChanges();
    this.usuCollection = afs.collection<UsuIterfase>('usuario');
    this.usuario = this.usuCollection.snapshotChanges().pipe(
      map(actions => actions.map(a=>{
        const data = a.payload.doc.data() as UsuIterfase;
        const id = a.payload.doc.id;
        return { id, ...data};
      }))
    );
*/
  }


  loginForm(usulogin: UsuIterfase): Promise<any>{
    return new Promise((resolve, reject) =>{
      var mensaje = new Array();
      this.usuario = this.afs.collection('usuario').valueChanges();
      var i =0;
      this.usuario.subscribe(
        usuario =>{
          console.log(usuario[0].email+ '++'+ usuario[0].password)
          if(usuario[0].email == usulogin.email){
            if(usuario[0].password == usulogin.password){
              mensaje[0] = "Correcto";
              mensaje[1] = usuario[0].email;
              resolve(mensaje);
            }else{
              mensaje[0] = "Contraseña Incorrecta";
              resolve(mensaje);
            }
          }else{
            mensaje[0] = "Correo Incorrecto";
            resolve(mensaje);
          }

        }
        ,err => {
          console.log(err.message)
        ,() => console.log('Observer got a complete notification')
        }
      )

    })
  }

}
