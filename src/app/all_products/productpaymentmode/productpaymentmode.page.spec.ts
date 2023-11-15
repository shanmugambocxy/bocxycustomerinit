import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductpaymentmodePage } from './productpaymentmode.page';

describe('ProductpaymentmodePage', () => {
  let component: ProductpaymentmodePage;
  let fixture: ComponentFixture<ProductpaymentmodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductpaymentmodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductpaymentmodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
