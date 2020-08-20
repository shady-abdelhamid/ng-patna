import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';
import { StarRatingComponent } from './star-rating/star-rating.component';



@NgModule({
  declarations: [
    ConvertToSpacesPipe,
    StarRatingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    ConvertToSpacesPipe,
    StarRatingComponent,
  ]
})
export class SharedModule { }
