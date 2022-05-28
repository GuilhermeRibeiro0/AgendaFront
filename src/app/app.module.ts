import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaComponent } from './pessoa/pessoa.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PessoaService } from './services/pessoa.service';

@NgModule({
  declarations: [
    AppComponent,
    PessoaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PessoaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
