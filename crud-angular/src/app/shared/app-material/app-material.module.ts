import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  exports: [
    MatCardModule,
    MatToolbarModule,
    MatTableModule
  ],

})
export class AppMaterialModule { }
