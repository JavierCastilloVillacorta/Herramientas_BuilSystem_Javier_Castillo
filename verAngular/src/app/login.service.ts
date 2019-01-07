import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { UsuIterfase } from './model/usuIterfase';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  usuCollection: AngularFirestoreCollection <UsuIterfase>;
  usuario: Observable<UsuIterfase[]>;
  usuDoc: AngularFirestoreDocument<UsuIterfase>;

  constructor(public afs: AngularFirestore) {
    //this.usuario = afs.collection('usuario').valueChanges();
    this.usuCollection = afs.collection<UsuIterfase>('usuario');
    this.usuario = this.usuCollection.snapshotChanges().pipe(
      map(actions => actions.map(a=>{
        const data = a.payload.doc.data() as UsuIterfase;
        const id = a.payload.doc.id;
        return { id, ...data};
      }))
    );

  }

  getUsuario(){
    return this.usuario;
  }

  loginForm(usulogin: UsuIterfase){
    alert(usulogin.email)
    var i =0;
    this.usuario.subscribe(usuario =>{
      console.log(usuario[0].email+ '++'+ usulogin.email)
      if(usuario[i].email == usulogin.email){
        alert("Correcto")
      }else{
      alert("Incorrecto")
      }
      i++;
    })



  }

}
