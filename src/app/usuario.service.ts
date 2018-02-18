/**
 * Esse serviço será responsável por guardar os dados de usuário após 
 * o login.
 * 
 * Note que os dados são armazenados no browser do cliente e não no
 * servidor. 
 */
import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioService {
  constructor() { }

  //Recebe dados de um usuário e armazena em localStorage
  logar(novoUsuario: {nome, email}){
    localStorage.setItem('nome', novoUsuario.nome);
    localStorage.setItem('email', novoUsuario.email);

    console.log(novoUsuario);
  }

  //Lê os dados de localStorage e retorna um objeto
  ler(){
    let usuario = {
      nome: localStorage.getItem('nome'),
      email: localStorage.getItem('email')
    }

    return usuario;
  }
}
