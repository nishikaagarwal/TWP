import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TacticmodalPage } from './tacticmodal.page';

describe('TacticmodalPage', () => {
  let component: TacticmodalPage;
  let fixture: ComponentFixture<TacticmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TacticmodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TacticmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
