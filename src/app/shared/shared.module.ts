import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';



@NgModule({
  declarations: [
    ConvertToSpacesPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    ConvertToSpacesPipe,
  ]
})
export class SharedModule { }
