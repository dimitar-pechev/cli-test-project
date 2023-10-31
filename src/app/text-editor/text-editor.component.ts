import { Component, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "app-text-editor",
  templateUrl: "./text-editor.component.html",
})
export class TextEditorComponent {
  @Input()
  public text: string = "";

  @Output()
  public textChange: EventEmitter<string> = new EventEmitter();

  @Output()
  public close: EventEmitter<void> = new EventEmitter();

  public handleTextSubmit(text: string): void {
    this.textChange.emit(text);

    // emit close as well to trigger editor close
    this.close.emit();
  }

  public handleCancelClick(): void {
    this.close.emit();
  }
}
