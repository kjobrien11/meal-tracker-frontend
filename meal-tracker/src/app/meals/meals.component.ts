import { Component } from '@angular/core';
import { MealComponent } from '../meal/meal.component';
import { NewMealComponent } from '../new-meal/new-meal.component';

@Component({
  selector: 'app-meals',
  imports: [MealComponent, NewMealComponent],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.css',
  standalone: true
})
export class MealsComponent {

}
