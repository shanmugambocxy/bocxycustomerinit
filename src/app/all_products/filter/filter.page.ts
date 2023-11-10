import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StaticValues } from '../static/staticValues';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {
  @Input() type: string;
  labelList: any = [];
  categoryList: any = [];
  sortbyList: any = StaticValues.values.sortByDropdown;
  constructor(public modalCtrl: ModalController,) {
    console.log('data', this.type);
    this.labelList = [{
      id: 1,
      name: 'category',
      isActive: true
    },
    {
      id: 2,
      name: 'Brand',
      isActive: true
    },
    {
      id: 3,
      name: 'Formulation',
      isActive: true
    }];
    this.categoryList = [
      {
        name: 'hair products',
        isCategorySelected: false
      },
      {
        name: 'makeup',
        isCategorySelected: false
      },
      {
        name: 'fragrance',
        isCategorySelected: false
      }
    ]
  }

  ngOnInit() {
  }

  selectedCategory(item: any) {
    console.log('category', this.categoryList);

  }
  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

}
