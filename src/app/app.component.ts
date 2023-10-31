import { Component, Input } from "@angular/core";

interface FootballPlayer {
  id: number;
  name: string;
  isActive: boolean;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
})
export class AppComponent {
  public players: FootballPlayer[] = [
    { id: 1, name: "Steven Gerrard", isActive: false },
    { id: 2, name: "Cristiano Ronaldo", isActive: true },
    { id: 3, name: "Trent Alexander-Arnold", isActive: true },
    { id: 4, name: "Zinedine Zidane", isActive: false },
    { id: 5, name: "Miguel Perez", isActive: false },
    { id: 6, name: "Luis Suarez", isActive: true },
  ];

  public editedItemId: number;

  public numbersListTitle = "Numbers list";

  public team = "Liverpool";

  public handleActionButtonClick(player: FootballPlayer): void {
    player.isActive = !player.isActive;
  }

  public handleItemClick(item: object, event: Event): void {
    console.log(item, event);
  }

  public handleNumberClick(num: number): void {
    console.log(num);
  }

  public handleItemEditClick(player: FootballPlayer): void {
    this.editedItemId = player.id
  }

  public closeEditor(): void {
    this.editedItemId = null;
  }
}
