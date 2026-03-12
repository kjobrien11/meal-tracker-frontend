import { Component } from '@angular/core';
import { MealComponent } from '../meal/meal.component';

@Component({
  selector: 'app-meals',
  imports: [MealComponent],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.css',
  standalone: true
})
export class MealsComponent {

}
