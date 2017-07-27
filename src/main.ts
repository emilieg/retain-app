import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {App, providers, routes} from './app';
import {Main, NotesContainer, About} from './app/containers';
import {AppBar, NoteCard, NoteCreator, ColorPicker} from './app/ui';

@NgModule({
  declarations: [
    App,
    Main,
    AppBar,
    NoteCard,
    NotesContainer,
    NoteCreator,
    ColorPicker ,
    About
    ],
  providers,  
  imports: [BrowserModule, FormsModule, HttpModule, routes],
  bootstrap: [App]
})

export class AppModule{};

platformBrowserDynamic().bootstrapModule(AppModule);