import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TacticmodalPage} from '../tacticmodal/tacticmodal.page';

@Component({
  selector: 'app-addgoals',
  templateUrl: './addgoals.page.html',
  styleUrls: ['./addgoals.page.scss'],
})
export class AddgoalsPage implements OnInit {

  constructor(private modalController: ModalController) { }

  OpenModal() {
    this.modalController.create({component: TacticmodalPage}).then((modalElement) => {
      modalElement.present();
    });
  }

  ngOnInit(){
    
  }
}
