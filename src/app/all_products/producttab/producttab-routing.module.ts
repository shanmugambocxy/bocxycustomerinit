import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProducttabPage } from './producttab.page';
import { ProductHomePage } from '../product-home/product-home.page';




// const routes: Routes = [
//   {
//     path: 't',
//     redirectTo: 'producthome/producttabs/producttab1',
//     pathMatch: 'full'
//   },
//   {
//     path: 'producttabs',
//     component: ProducttabPage,
//     children: [
//       { path: 'producttab1', loadChildren: '../product-home/product-home.module' },

//     ]
//   },

// ];


const routes: Routes = [
  {
    path: 'tabs',
    component: ProducttabPage,
    children: [
      {
        path: 'producttab1',
        children: [
          {
            path: '',
            loadChildren: () => import('../../all_products/product-home/product-home.module').then(m => m.ProductHomePageModule)
          }
        ]
      },
      // {
      //   path: 'tab2',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      //     }
      //   ]
      // },
      // {
      //   path: 'tab3',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      //     }
      //   ]
      // },
      {
        path: '',
        redirectTo: '/tabs/producttab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProducttabPageRoutingModule { }
