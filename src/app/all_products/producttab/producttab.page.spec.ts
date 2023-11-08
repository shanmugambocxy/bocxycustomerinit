import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProducttabPage } from './producttab.page';

describe('ProducttabPage', () => {
  let component: ProducttabPage;
  let fixture: ComponentFixture<ProducttabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducttabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProducttabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
