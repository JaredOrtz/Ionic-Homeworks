import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Components
import { SlopesPage } from '../pages/slopes/slopes.component';
import { FinishedPage } from '../pages/finished/finished.component';
import { AddPage } from '../pages/add/add.component';
import { ListsComponent } from '../components/lists.component';

// Providers
import { WishesServices } from '../services/whises.service';

// Pipes 
import { FilterCompletPipe } from '../pipes/filter-complet/filter-complet';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    SlopesPage,
    FinishedPage,
    AddPage,
    FilterCompletPipe,
    ListsComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    SlopesPage,
    FinishedPage,
    AddPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    WishesServices,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
