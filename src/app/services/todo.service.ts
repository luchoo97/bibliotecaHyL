import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {TaskI} from '../models/task.interface';
import {AngularFireAuth} from '@angular/fire/auth';
import { promise } from 'protractor';
import { TaskII } from '../models/tassk.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
private todosCollection: AngularFirestoreCollection<TaskI>;
private todossCollection: AngularFirestoreCollection<TaskII>;
private todos: Observable<TaskI[]>;
private todoss: Observable<TaskII[]>;

  constructor(db:AngularFirestore, private aFauth:AngularFireAuth) {
    this.todosCollection = db.collection<TaskI>('biblioteca');
    this.todossCollection = db.collection<TaskII>('proveedores');
    this.todos = this.todosCollection.snapshotChanges().pipe(map(
      actions =>{
        return actions.map(a =>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        })
      }
    ));
   
    
   this.todoss = this.todossCollection.snapshotChanges().pipe(map(
    actions =>{
      return actions.map(a =>{
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return {id, ...data};
      })
    }
  ));
 }


   login(email:string, password:string){

    return new Promise((resolve, rejected)=>{
      this.aFauth.auth.signInWithEmailAndPassword(email, password).then(user =>{
        resolve(user)
      }).catch(err => rejected(err));
      
    });
     
   
  }

   getTodos(){
     return this.todos;
   }

   getTodo(id:string){
    return this.todosCollection.doc<TaskI>(id).valueChanges();

   }
   updateTodo(todo:TaskI, id: string){
    return this.todosCollection.doc(id).update(todo);
   }

   addTodo(todo:TaskI){
     return this.todosCollection.add(todo);
   }

   removeTodo(id:string){
     return this.todosCollection.doc(id).delete;
   }

   geetTodos(){
    return this.todoss;
  }

  gettTodo(id:string){
   return this.todossCollection.doc<TaskII>(id).valueChanges();

  }
  updateeTodo(todo:TaskII, id: string){
   return this.todossCollection.doc(id).update(todo);
  }

  adddTodo(todo:TaskII){
    return this.todossCollection.add(todo);
  }

  removeeTodo(id:string){
    return this.todossCollection.doc(id).delete;
  }
}


