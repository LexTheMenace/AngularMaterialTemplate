import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  items: { id: number }[] = [{ id: 2 }, { id: 3 }, { id: 1 }];

  sortItems(direction: string = 'asc') {
    let sorted = this.items.sort((a, b) => (a.id > b.id ? 1 : -1));
    this.items = direction === 'asc' ? sorted : sorted.reverse();
  }
}
