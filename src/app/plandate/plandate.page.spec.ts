import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlandatePage } from './plandate.page';

describe('PlandatePage', () => {
  let component: PlandatePage;
  let fixture: ComponentFixture<PlandatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlandatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlandatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
