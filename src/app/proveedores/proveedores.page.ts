import { Component, OnInit } from '@angular/core';
import { TaskII} from '../models/tassk.interface';
import {TodoService} from '../services/todo.service';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.page.html',
  styleUrls: ['./proveedores.page.scss'],
})
export class ProveedoresPage implements OnInit {
  proveedores: TaskII[];

  constructor(private todoService:TodoService , public NavController: NavController) { }

  IrVolver(){
    this.NavController.navigateBack('menu');
  }

  ngOnInit() {
    this.todoService.geetTodos().subscribe(res => this.proveedores = res);
  }

}
