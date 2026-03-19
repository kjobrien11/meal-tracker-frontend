import { Component } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-food',
  imports: [BaseChartDirective],
  templateUrl: './food.component.html',
  styleUrl: './food.component.css',
  standalone: true
})
export class FoodComponent {

  protein = 22;
  carbs = 1;
  fats = 9;

  pieChartType: ChartType = "pie";

  pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          font: {
            size: 10
          }
        }
      }
    }
  };

  pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: ['Protein', 'Carbs', 'Fats'],
    datasets: [
      {
        data: [this.protein, this.carbs, this.fats],
        backgroundColor: ['#A9CAB0', '#FFCE56', '#FF6384']
      }
    ]
  };

}
