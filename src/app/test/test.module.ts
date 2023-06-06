import { QuickUiModule } from 'quick-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { CreatewhatifComponent } from './createwhatif/createwhatif.component';
import { ShareComponent } from './share/share.component';
import { BaselineComponent } from './baseline/baseline.component';


@NgModule({
  declarations: [
    CreatewhatifComponent,
    ShareComponent,
    BaselineComponent
  ],
  imports: [
    CommonModule,
    TestRoutingModule
  ,	QuickUiModule,
]
})
export class TestModule { }
