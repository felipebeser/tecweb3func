import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCardFuncionarioComponent } from './lista-card-funcionario.component';

describe('ListaCardFuncionarioComponent', () => {
  let component: ListaCardFuncionarioComponent;
  let fixture: ComponentFixture<ListaCardFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCardFuncionarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCardFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
