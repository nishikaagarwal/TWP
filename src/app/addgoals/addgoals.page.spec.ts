import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddgoalsPage } from './addgoals.page';

describe('AddgoalsPage', () => {
  let component: AddgoalsPage;
  let fixture: ComponentFixture<AddgoalsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddgoalsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddgoalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
