import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductHomePage } from './product-home.page';

describe('ProductHomePage', () => {
  let component: ProductHomePage;
  let fixture: ComponentFixture<ProductHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
