import {Component} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-input',
  styleUrl: 'input.component.css',
  templateUrl: 'input.component.html',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
})
export class InputComponent {

}
