import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  mensagens = [];
  //Essa variável está ligada ao formulário no HTML
  entrada;

  constructor(private http: HttpClient, private usuario: UsuarioService) { }

  //Função executada na inicialização do componente
  ngOnInit() {
    //Repete a função continuamente num intervalo de 1 segundo
    setInterval(() => {
      //Usa o serviço HttpClient para fazer uma requisição ao servidor e buscar os dados
      //de mensagens.
      this.http.get<any>(`http://159.65.164.132:3000/meu-chat`).subscribe((resposta) => {
        this.mensagens = resposta.mensagens;
        console.log(resposta);
      });
    }, 1000);
  }

  enviar(){
    //Acessa os dados do usuário registrados no UsuarioService
    let usuario = this.usuario.ler();

    //Cria uma mensagem que contém o conteúdo presente no formulário da página mais
    //os dados do usuário que estavam gravados no UsuarioService
    let novaMensagem = {
      conteudo: this.entrada,
      nome: usuario.nome,
      email: usuario.email
    }

    //Adiciona a nova mensagem à lista
    this.mensagens.push(novaMensagem);

    //Cria um objeto de dados que serão salvos no servidor. Isso é necessário pois
    //a API não aceita a gravação de um vetor fora de um objeto.
    let dados = {
      mensagens: this.mensagens
    }
    
    //Envia os dados para o servidor. Note que é usado o método POST. 
    this.http.post(`http://159.65.164.132:3000/meu-chat`, dados).subscribe(resposta => {
      this.entrada = '';
      console.log(resposta);
    });
  }

}
