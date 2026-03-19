import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-new-meal-details',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './new-meal-details.component.html',
  styleUrl: './new-meal-details.component.css',
  standalone: true
})
export class NewMealDetailsComponent implements OnInit{

  ngOnInit(): void {
    this.addFood();
    this.addFood();
  }

  mealForm = new FormGroup({
    mealName: new FormControl('', [Validators.required]),
    foods: new FormArray([])
  });

  createFood(): FormGroup {
    return new FormGroup({
      foodName: new FormControl('', Validators.required),
      grams: new FormControl(0, [Validators.required, Validators.min(0)])
    });
  }

  get foods(): FormArray {
  return this.mealForm.get('foods') as FormArray;
}

addFood() {
  this.foods.push(this.createFood());
}

removeFood(index: number) {
  this.foods.removeAt(index);
}

}
