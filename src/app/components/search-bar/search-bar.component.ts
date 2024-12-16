import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [ReactiveFormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  searchForm = new FormGroup({
    query: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });
  @Output() onUpdateQuery = new EventEmitter<string>();

  onSubmit() : void {
    console.log(this.searchForm.valid);
    if (this.searchForm.valid) {
      this.onUpdateQuery.emit(this.searchForm.value.query!);
    }
  }
}
