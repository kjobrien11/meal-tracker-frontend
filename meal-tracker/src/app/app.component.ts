import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MealsComponent } from './meals/meals.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MealsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'meal-tracker';
}
