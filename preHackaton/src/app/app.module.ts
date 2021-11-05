import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Nuestros componentes
import { SearchComponent } from './components/search-vale/search.component';
import { MenuEliPComponent } from './components/menu-eli-p/menu-eli-p.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MenuEliPComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
