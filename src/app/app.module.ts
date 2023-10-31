import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { NavigationModule } from "./navigation/navigation.module";
import { TextEditorComponent } from './text-editor/text-editor.component';

@NgModule({
  declarations: [AppComponent, TextEditorComponent],
  imports: [BrowserModule, NavigationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
