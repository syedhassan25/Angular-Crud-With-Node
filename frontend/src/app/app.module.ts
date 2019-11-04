import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule, MatDividerModule,
  MatSnackBarModule,MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule, MatCardModule, MatTableModule } from '@angular/material';

import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import {IssueService} from './issue.service';


const routes:Routes = [
{path:'create', component:CreateComponent},
{path:'edit/:id',component:EditComponent} ,
{path:'list',component:ListComponent},
{path:'',redirectTo:'list',pathMatch:'full'} 
]
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatDividerModule,
     MatSnackBarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,MatIconModule,MatOptionModule,MatSelectModule
  ],
  providers: [IssueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
