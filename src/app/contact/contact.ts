import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-contact',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

}
