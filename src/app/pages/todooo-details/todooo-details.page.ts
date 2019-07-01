import { Component, OnInit } from '@angular/core';
import { TaskIII } from 'src/app/models/tasssk.interface';
import { TodoService } from '../../services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-todooo-details',
  templateUrl: './todooo-details.page.html',
  styleUrls: ['./todooo-details.page.scss'],
})
export class TodoooDetailsPage implements OnInit {
  todo: TaskIII = {
    Nombre: ' ',
    Apellido: ' ',
    Nacionalidad: ' ',
    Premios: ' '
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
      this.todoService.getttTodo(this.todoId).subscribe(res => {
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
        this.todoService.updateeeTodo(this.todo, this.todoId).then(()=> {
          loading.dismiss();
          this.nav.navigateForward('autor');
        });
      } else {
        this.todoService.addddTodo(this.todo).then(() => {
          loading.dismiss();
          this.nav.navigateForward('autor');
        });
  
      }
      
    }
    onRemove(todoId: string){
      this.todoService.removeeeTodo(todoId);
  
    }
  
    
  }
