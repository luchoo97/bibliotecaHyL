import { Component, OnInit } from '@angular/core';
import { TaskI } from 'src/app/models/tassk.interface';
import { TodoService } from '../../services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-todoo-details',
  templateUrl: './todoo-details.page.html',
  styleUrls: ['./todoo-details.page.scss'],
})
export class TodooDetailsPage implements OnInit {
  todo: TaskI = {
    Empresa: ' ',
    Direccion: ' ',
    Telefono: ' ',
    Fax: ' ',

    
    

  };
  todoId = null;

  constructor(private route: ActivatedRoute, private nav: NavController,
    private todoService: TodoService, private loadingController: LoadingController) { }

  ngOnInit() {
    this.todoId = this.route.snapshot.params['id'];
    if (this.todoId) {
      this.loadTodo();
    }
  }

  async loadTodo() {
    const loading = await this.loadingController.create({
      message: 'Loading....'
    });
    await loading.present();
    this.todoService.gettTodo(this.todoId).subscribe(res => {
      loading.dismiss();
      this.todo = res;
    })
  }
  async saveTodo() {
    const loading = await this.loadingController.create({
      message: 'Guardando....'
    });
    await loading.present();
    if (this.todoId) {
      this.todoService.updateeTodo(this.todo, this.todoId).then(()=> {
        loading.dismiss();
        this.nav.navigateForward('proveedores');
      });
    } else {
      this.todoService.adddTodo(this.todo).then(() => {
        loading.dismiss();
        this.nav.navigateForward('proveedores');
      });

    }
    
  }
  onRemove(todoId: string){
    this.todoService.removeeTodo(todoId);

  }

  
}




