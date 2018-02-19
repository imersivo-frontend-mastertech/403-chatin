import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //Os dados desse objeto estão ligados ao formulário através da 
  //diretiva ngModel
  formulario = {
    nome: '',
    email: ''
  };

  constructor(private usuario: UsuarioService, private router: Router, private fb: FacebookService) { }

  ngOnInit() {
    let initParams: InitParams = {
      appId: '2506308686260322',
      xfbml: true,
      version: 'v2.8'
    };

    this.fb.init(initParams);
  }

  //Essa função registra o dados do formulário no serviço de usuário
  //e troca o componente ativo na página
  login(){
    this.usuario.logar(this.formulario);
    this.router.navigate(['/lista']);
  }

  facebookLogin(){
    this.fb.login()
      .then((response: LoginResponse) => {
        return this.fb.api('/me');
      })
      .then((response) => {
        console.log(response);
        this.usuario.logar({nome: response.name, email: response.email});
        this.router.navigate(['/lista']);
      });
  }

}
