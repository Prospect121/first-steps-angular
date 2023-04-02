import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponetsComponent } from './componets.component';

@NgModule({
  declarations: [ComponetsComponent],
  imports: [CommonModule],
  exports: [ComponetsComponent],
})
export class ComponetsModule {}
