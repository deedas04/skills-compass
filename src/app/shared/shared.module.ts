import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CarbonModule } from '../carbon.module';

@NgModule({
  imports: [CommonModule, CarbonModule],
  exports: [HeaderComponent],
  declarations: [HeaderComponent],
})
export class SharedModule {}
