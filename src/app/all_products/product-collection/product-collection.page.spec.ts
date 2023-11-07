import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductCollectionPage } from './product-collection.page';

describe('ProductCollectionPage', () => {
  let component: ProductCollectionPage;
  let fixture: ComponentFixture<ProductCollectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCollectionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductCollectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
