import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Popup } from '@mobiscroll/angular/src/js/classes/popup';
import { VisionInfoPopupComponent } from '../vision-info-popup/vision-info-popup.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vision',
  templateUrl: './vision.page.html',
  styleUrls: ['./vision.page.scss'],
})
export class VisionPage {
  popover: any;


  constructor(public popoverController: PopoverController, private router: Router) { }

  async OpenPopover(event) {
     const popover = await this.popoverController.create({
       component: VisionInfoPopupComponent,
       event
     });
     return await popover.present();
     }

  navigate() {
    this.router.navigate(['/plandate']);
  }

  Save() {}

}
