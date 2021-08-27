import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
// import { MdfExamComponent } from './mdf-exam/mdf-exam.component';
// import { TdfExamComponent } from './tdf-exam/tdf-exam.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ServiceWorkerModule } from '@angular/service-worker';
// import { environment } from '../environments/environment';
// import { ButtonComponent } from './button/button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
// import { HttpClientModule } from '@angular/common/http';
import { QuizComponent } from './quiz/quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent
    // MdfExamComponent,
    // TdfExamComponent,
    // ButtonComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatRadioModule,
    MatButtonModule,
    MatDividerModule,
    // MatFormFieldModule,
    // MatInputModule,
    // HttpClientModule,
    // ServiceWorkerModule.register('ngsw-worker.js', {
      // enabled: environment.production,
      
      // registrationStrategy: 'registerWhenStable:30000'
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
