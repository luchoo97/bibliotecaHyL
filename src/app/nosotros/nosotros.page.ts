import { Component, OnInit } from '@angular/core';
import { ToastController} from '@ionic/angular';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.page.html',
  styleUrls: ['./nosotros.page.scss'],
})
export class NosotrosPage implements OnInit {

  constructor(public ToastCtrl: ToastController) { }

  ngOnInit() {
  }

  async verNotificacion(){
    const toast = await this.ToastCtrl.create({
      message: "EPE2 - IPCHLE PROFESOR GERMÁN RIVEROS",
      duration: 1000,
      position: "middle"
    })
    toast.present();
  }

}
