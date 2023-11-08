import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductfindstorePage } from './productfindstore.page';

describe('ProductfindstorePage', () => {
  let component: ProductfindstorePage;
  let fixture: ComponentFixture<ProductfindstorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductfindstorePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductfindstorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
