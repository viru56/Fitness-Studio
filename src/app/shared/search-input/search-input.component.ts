import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ygs-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {

  constructor() { }

  filterText: string;
  @Output()
  clickAction = new EventEmitter<void>();

  @Output()
  keyupAction = new EventEmitter<string>();

  onKeyup() {
    this.keyupAction.emit(this.filterText);
  }

}
