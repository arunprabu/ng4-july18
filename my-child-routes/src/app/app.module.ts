import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { OthersComponent } from './components/others/others.component';

import { MobilesComponent } from './components/products/mobiles/mobiles.component';
import { IphoneComponent } from './components/products/mobiles/iphone/iphone.component';
import { PixelComponent } from './components/products/mobiles/pixel/pixel.component';

//router config with child routes/nested routes
const ROUTER_CONFIG: Routes = [
  { path: '', redirectTo: 'categories', pathMatch: 'full' },
  { path: 'categories', component: CategoriesComponent },
  { 
    path: 'categories/:categoryName', component: CategoryDetailComponent,
    children: [
      { path: '', redirectTo: 'mobiles', pathMatch: 'full' },
      { 
        path: 'mobiles', component: MobilesComponent, 
        children: [
          { path: 'iphone', component: IphoneComponent },
          { path: 'pixel', component: PixelComponent }
        ]
      }
    ]
  },
  { path: 'others', component: OthersComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriesComponent,
    CategoryDetailComponent,
    OthersComponent,
    MobilesComponent,
    IphoneComponent,
    PixelComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTER_CONFIG)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
