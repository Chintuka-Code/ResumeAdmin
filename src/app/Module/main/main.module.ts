import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from '../../Component/main/main.component';
import { HeaderComponent } from '../../Component/header/header.component';
import { FooterComponent } from '../../Component/footer/footer.component';

@NgModule({
  declarations: [MainComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, MainRoutingModule],
})
export class MainModule {}
