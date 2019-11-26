import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoEditorComponent } from './todo-editor/todo-editor.component';
import { ReceitaComponent } from './page-receitas/page-receitas.component';
import { PageHomeComponent } from './page-home/page-home.component'
import { PageAboutComponent } from './page-about/page-about.component';
import { PageGaleriaComponent } from './page-galeria/page-galeria.component';
import { PageNoticiaComponent } from './page-noticia/page-noticia.component';
import { PageContactsComponent } from './page-contacts/page-contacts.component';
import { PageEditeReceitaComponent } from './page-edite-receita/page-edite-receita.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path:'', component: PageHomeComponent},
  { path:'index.html', component:AppComponent},
  { path:'index', component:AppComponent},
  { path: 'todos', component: TodoListComponent },
  { path: 'todo/:todoId', component: TodoEditorComponent },
  { path: 'todo', component: TodoEditorComponent },
  { path: 'receitas', component: ReceitaComponent},
  { path: 'Home', component: PageHomeComponent},
  { path: 'About', component: PageAboutComponent},
  { path: 'Galeria', component: PageGaleriaComponent},
  { path: 'Noticia', component: PageNoticiaComponent},
  { path: 'Contacts', component: PageContactsComponent},
  { path: 'editaReceita', component: PageEditeReceitaComponent},
  { path: 'editaReceita/:receitaId', component: PageEditeReceitaComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }