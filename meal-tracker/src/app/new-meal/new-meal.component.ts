import { Component } from '@angular/core';
  import { MatDialog } from '@angular/material/dialog';
import { NewMealDetailsComponent } from '../new-meal-details/new-meal-details.component';


@Component({
  selector: 'app-new-meal',
  imports: [NewMealDetailsComponent],
  templateUrl: './new-meal.component.html',
  styleUrl: './new-meal.component.css'
})
export class NewMealComponent {


constructor(private dialog: MatDialog) {}

openDialog() {
  this.dialog.open(NewMealDetailsComponent);
}

}
