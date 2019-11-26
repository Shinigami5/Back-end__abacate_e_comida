import { Component, OnInit } from '@angular/core';
import { ReceitaService } from 'src/app/receita.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Receita } from '../Receita';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-page-edite-receita',
  templateUrl: './page-edite-receita.component.html',
  styleUrls: ['../Style/styleDasPaginas.css']
})
export class PageEditeReceitaComponent implements OnInit {
  public receitaForm: FormGroup;
  public receitaId: String;

  constructor(
    private receitaService: ReceitaService,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) { 
    this.receitaForm = this.formBuilder.group(
      {
        id: [''],
        tituloReceita: ['', Validators.required],
        ingrediente: ['',Validators.required],
        howFazer: ['',Validators.required],
        autor: ['', Validators.required]
      }
    );
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.receitaId = params['receitaId'];
      this.getReceita(this.receitaId);
    });
  }

  public getReceita(id: any): void {
    setTimeout(() => {
      this.receitaService.retrievetById(id)
      .subscribe((data: Receita) => {
        this.receitaForm.patchValue(data);
        console.log(data);
      },(error) => {
        console.log(error);
        console.log("erro no get");
      });
    },2000);
  }

  public doRequest(): void {
    setTimeout(() => {
      let data: Receita = this.receitaForm.value;
      if (data.id === undefined || data.id === "")
      {
        this.receitaService.create(data)
        .subscribe((data: Receita) => this.successMessage("Nova Receita salva com sucesso")
        ,(error) => this.errorMessage(error, "Erro ao inserir nova receita"));
      }
      else 
      {
        this.receitaService.update(data)
        .subscribe((data: Receita) => this.successMessage("Receita atualizado com sucesso")
        ,(error) => this.errorMessage(error, "Erro ao atualizar Receita"));
      }
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
    });
  }

}
