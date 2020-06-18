import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-vision-info-popup',
  templateUrl: './vision-info-popup.component.html',
  styleUrls: ['./vision-info-popup.component.scss'],
})
export class VisionInfoPopupComponent implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {}

  close() {
    this.popoverController.dismiss();
    }


}


