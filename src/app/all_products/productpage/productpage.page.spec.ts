import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductpagePage } from './productpage.page';

describe('ProductpagePage', () => {
  let component: ProductpagePage;
  let fixture: ComponentFixture<ProductpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductpagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
