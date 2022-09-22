import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'senac-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {
  @Input() nome!: String;
  @Input() isMasculino!: boolean;
  @Input() idade!: number;
  isLogado: boolean = false;
  constructor() {

  }

  ngOnInit(): void {
    console.log("Teste on init")
  }

}
