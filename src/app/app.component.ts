import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContainerComponent } from './componentes/container/container.component';
import { ContatoComponent } from './componentes/contato/contato.component';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { SeparadorComponent } from './componentes/separador/separador.component';

interface Contato {
  id: number,
  nome: string,
  telefone: string
}

import agenda from './agenda.json'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    ContainerComponent,
    CabecalhoComponent,
    SeparadorComponent,
    ContatoComponent,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
  contatos: Contato[] = agenda;

  filtroPorTexto: string =''

  filtrarContatosPorTexto (): Contato [] {
    if (!this.filtroPorTexto) {
      return this.contatos
    }
    return this.contatos.filter(contato => {
      return contato.nome.toLowerCase(). includes(this.filtroPorTexto.toLowerCase())
    })
  }

  filtrarContatosPorLetraInicial(letra:string): Contato [] {
    return this.filtrarContatosPorTexto().filter( contato => {
      return contato.nome.toLowerCase().startsWith(letra)
    });
  }
}
