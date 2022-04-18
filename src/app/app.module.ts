import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CardComponent} from "../card/card.component";
import {FormsModule} from "@angular/forms";
import {UserComponent} from "../user/user.component";
import {DerctDirective} from "./derct.directive";
import {AttributeDirective} from "./attribute.directive";
import { PipePipe } from './pipe.pipe';

@NgModule({
    declarations: [
        AppComponent,
        CardComponent,
        UserComponent,
        DerctDirective,
        AttributeDirective,
        PipePipe
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
