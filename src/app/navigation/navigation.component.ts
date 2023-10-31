import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.less"]
})
export class NavigationComponent {
  // the @Input() decorator allows the parent to bind to that prop
  // without it the parent component cannot provide [navigationTitle]="title" - the decorator allows this in the template
  @Input()
  public navigationTitle: string;

  @Input()
  public numbers: number[];

  // same as the @Input() - without the @Output() decorator, the parent component
  // will not be able to read the custom event like this (numberClick)="callHandler($event)"
  // without the decorator (numberClick)="callHandler($event)" will never be executed in the parent component
  @Output()
  public numberClick: EventEmitter<number> = new EventEmitter();
}
