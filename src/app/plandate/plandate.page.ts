import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PlanPopupComponent } from '../plan-popup/plan-popup.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plandate',
  templateUrl: './plandate.page.html',
  styleUrls: ['./plandate.page.scss'],
})
export class PlandatePage {

  constructor(public popoverController: PopoverController, private router: Router) { }

  async OpenPopover(event) {
     const popover = await this.popoverController.create({
       component: PlanPopupComponent,
       event
     });
     return await popover.present();
     }

     navigate() {
      this.router.navigate(['/tab1']);
    }

}
