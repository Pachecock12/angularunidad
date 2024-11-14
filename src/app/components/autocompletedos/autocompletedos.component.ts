import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-autocompletedos',
  standalone: true,
  imports: [FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,],
  templateUrl: './autocompletedos.component.html',
  styleUrl: './autocompletedos.component.css'
})
export class AutocompletedosComponent {
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
}
