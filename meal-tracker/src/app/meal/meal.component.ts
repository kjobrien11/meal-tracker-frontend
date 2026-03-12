import { Component } from '@angular/core';
import { FoodComponent } from '../food/food.component';

@Component({
  selector: 'app-meal',
  imports: [FoodComponent],
  templateUrl: './meal.component.html',
  styleUrl: './meal.component.css',
  standalone: true
})
export class MealComponent {

}
