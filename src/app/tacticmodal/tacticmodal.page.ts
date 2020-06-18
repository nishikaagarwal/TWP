import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';

@Component({
  selector: 'app-tacticmodal',
  templateUrl: './tacticmodal.page.html',
  styleUrls: ['./tacticmodal.page.scss'],
})
export class TacticmodalPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
