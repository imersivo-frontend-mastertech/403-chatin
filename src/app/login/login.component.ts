import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

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

  constructor(private usuario: UsuarioService, private router: Router) { }

  ngOnInit() {
  }

  //Essa função registra o dados do formulário no serviço de usuário
  //e troca o componente ativo na página
  login(){
    this.usuario.logar(this.formulario);
    this.router.navigate(['/lista']);
  }

}
