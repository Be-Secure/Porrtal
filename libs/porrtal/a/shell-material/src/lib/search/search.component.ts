import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SearchStateService } from '@porrtal/a-shell';

@Component({
  selector: 'porrtal-search',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  constructor(public searchStateService: SearchStateService) {}

  doSearch() {
    alert('search...');
  }

  doSearchTextChanged(evt: Event) {
    this.searchStateService.dispatch({
      type: 'setSearchText',
      searchText: (evt.target as HTMLInputElement).value
    })
  }
}
