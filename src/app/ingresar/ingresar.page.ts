import { Component, OnInit } from '@angular/core';
import {TodoService } from "../services/todo.service";
import {Router  } from '@angular/router';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.page.html',
  styleUrls: ['./ingresar.page.scss'],
})
export class IngresarPage implements OnInit {

  email: string;
  password: string;
  constructor(private authService: TodoService, public router: Router) { }

  ngOnInit() {
  }

  onSubmitLogin(){
   this.authService.login(this.email, this.password).then( res =>{
    this.router.navigate(['/list']);
   }).catch(err => alert('los datos son incorrecto'));
   
  }

}
