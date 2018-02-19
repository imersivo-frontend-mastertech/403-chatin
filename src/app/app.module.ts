/**
 * Precisamos incluir os módulos auxiliares que serão usados
 * na aplicação: 
 * 
 * RouterModule - Faz a 'troca de páginas'
 * FormsModule - Captura dados do formulário
 * HttpClientModule - Faz requisições para endereços na web
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListaComponent } from './lista/lista.component';
import { UsuarioService } from './usuario.service';
import { FacebookModule } from 'ngx-facebook';

// As rotas representam cada página da aplicação. Lembre que a 
// troca de páginas não acontece em realidade já que não existe
// um recarregamento da página.
// O que ocorre é uma troca dinâmica do HTML, o que caracteriza
// uma SPA (Single Page Application)
const rotas:Routes = [
  { path: '', component: LoginComponent},
  { path: 'lista', component: ListaComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rotas),
    FormsModule,
    HttpClientModule,
    FacebookModule.forRoot()
  ],
  providers: [
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
