import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberComponent } from './member/member.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { MemberFormComponent } from './member-form/member-form.component';
import { FlexModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmComponent } from './confirm/confirm.component';
import {MatDialogModule} from '@angular/material/dialog';
import { TemplateComponent } from './template/template.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolComponent } from './tool/tool.component';
import { EventComponent } from './event/event.component';
import { ArticleComponent } from './article/article.component';
import { ModalEvtComponent } from './modal-evt/modal-evt.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import { firebaseConfig } from './environement';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    MemberFormComponent,
    ConfirmComponent,
    TemplateComponent,
    DashboardComponent,
    ToolComponent,
    EventComponent,
    ArticleComponent,
    ModalEvtComponent,
    LoginComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,

    NgChartsModule,

    MatCardModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSortModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    MatFormFieldModule,
    BrowserModule,
    FlexModule,
    MatIconModule,
    MatTableModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
