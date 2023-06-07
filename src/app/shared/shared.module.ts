import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoresModule } from './stores/stores.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoresModule,
  ],
  exports: [
    StoresModule,
  ],
})
export class SharedModule {}
