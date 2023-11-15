import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductOrderListPage } from './product-order-list.page';

describe('ProductOrderListPage', () => {
  let component: ProductOrderListPage;
  let fixture: ComponentFixture<ProductOrderListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductOrderListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductOrderListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
