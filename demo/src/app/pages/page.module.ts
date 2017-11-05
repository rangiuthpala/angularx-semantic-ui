import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { L_SEMANTIC_UI_MODULE } from './../../../../src';

import { DirectivesModule } from './../directives/directives.module';

import { LsuDemoLayoutPage } from './_layout/_layout.page';
import { HomePage } from './home/home.page';
import { AccordionDemoPage } from './accordion/accordion.page';

const DEMO_PAGES: Array<any> = [
  LsuDemoLayoutPage,
  HomePage,
  AccordionDemoPage
]

import { PageRoutingModule } from './page-routing.module';

@NgModule({
  declarations: [
    ...DEMO_PAGES
  ],
  imports: [
    CommonModule,
    FormsModule,
    L_SEMANTIC_UI_MODULE,
    DirectivesModule,
    PageRoutingModule
  ],
  exports: [
    ...DEMO_PAGES
  ],
  entryComponents: [
    ...DEMO_PAGES
  ]
})
export class PageModule {

}