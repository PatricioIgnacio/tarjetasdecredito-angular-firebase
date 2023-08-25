import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCardComponent } from './components/create-card/create-card.component';
import { ListCardComponent } from './components/list-card/list-card.component';

const firebaseConfig = {
  apiKey: 'AIzaSyAn1arlr9mNhDrHZWxHcLk0R_ScNCn1rRg',
  authDomain: 'tarjetacredito-4157d.firebaseapp.com',
  projectId: 'tarjetacredito-4157d',
  storageBucket: 'tarjetacredito-4157d.appspot.com',
  messagingSenderId: '879603644812',
  appId: '1:879603644812:web:e8609a86f4c00e5bbc7ea9',
};

@NgModule({
  declarations: [AppComponent, CreateCardComponent, ListCardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
