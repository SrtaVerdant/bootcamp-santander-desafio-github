import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { CourseModule } from './courses/course.module';
import { CoreModule } from './core/component/core.module';
//toda vez que criar um componente, ele deve ser declarado no módulo que corresponde a ele
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CourseModule,
    CoreModule,
    RouterModule.forRoot([
      
      {
        path: '', redirectTo: 'courses',pathMatch: 'full'
      },
      
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
