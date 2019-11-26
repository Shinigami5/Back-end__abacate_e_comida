import { Component, Input, OnInit } from '@angular/core';
import { ReceitaService } from 'src/app/receita.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Receita } from '../Receita';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-page-receitas',
  templateUrl: './page-receitas.component.html',
  styleUrls: ['../Style/styleDasPaginas.css']
})
export class ReceitaComponent implements OnInit {
  private receitasListArray: Receita[]
  constructor(
    private receitaService: ReceitaService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getReceitas();
  }

  public getReceitas(): void {
    setTimeout(() => {
      this.receitaService.retrieveAll()
      .subscribe(items => {
        this.receitasListArray = items;
      },(error) => {
        console.log(error);
      });
    },2000);
  }

  public concludeReceita(receitaIndex: number): void {
    setTimeout(() => {
      let receita = this.receitasListArray[receitaIndex];
        this.receitaService.delete(receita.id)
        .subscribe(() => {
          this.successMessage("Receita removida com sucesso");
          this.getReceitas();
        }
        ,(error) => this.errorMessage(error, "Erro ao atualizar Receita"));
    },2000);
  }

  private successMessage(successMessage: string) 
  {
    console.log(successMessage);
    this._snackBar.open(successMessage, null, {
      duration: 2000,
    });
  }
  
  private errorMessage(error: string, errorMessage: string) 
  {
    console.log(error);
    this._snackBar.open(errorMessage, null, {
      duration: 2000,
    })
  }

}
