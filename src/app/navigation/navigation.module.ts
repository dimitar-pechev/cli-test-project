import { NgModule } from "@angular/core";
import { NavigationComponent } from "./navigation.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [NavigationComponent],
  exports: [NavigationComponent],
  imports: [CommonModule]
})
export class NavigationModule {}
