import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-plan-popup',
  templateUrl: './plan-popup.component.html',
  styleUrls: ['./plan-popup.component.scss'],
})
export class PlanPopupComponent implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {}

  close() {
    this.popoverController.dismiss();
    }

}
