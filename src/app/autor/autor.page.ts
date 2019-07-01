import { Component, OnInit } from '@angular/core';
import { TaskIII} from '../models/tasssk.interface';
import {TodoService} from '../services/todo.service';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.page.html',
  styleUrls: ['./autor.page.scss'],
})
export class AutorPage implements OnInit {
  autor: TaskIII[];

  constructor(private todoService:TodoService , public NavController: NavController) { }
  IrVolver(){
    this.NavController.navigateBack('menu');
  }

  ngOnInit() {
    this.todoService.geeetTodos().subscribe(res => this.autor = res);
  }

}
