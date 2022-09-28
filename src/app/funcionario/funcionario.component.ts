import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'senac-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {
  id! : number;
  @Input() nome!: String;
  @Input() isMasculino!: boolean;
  @Input() idade!: number;
  isLogado!: boolean;

  @Input() tipoFuncionario: string = "Administrador";

  constructor() {

  }

  ngOnInit(): void {
  }

}
