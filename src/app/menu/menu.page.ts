import { Component, OnInit } from '@angular/core';
import {NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(public NavController: NavController) {
  
   }

   IrLibros(){
     this.NavController.navigateForward('list');
   }
   
   IrProveedores(){
     this.NavController.navigateForward('proveedores');
   }

  ngOnInit() {
  }

}
