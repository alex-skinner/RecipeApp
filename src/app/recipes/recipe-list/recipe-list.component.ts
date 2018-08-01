import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Burger', 'A delicious meaty burger', 'https://cdn.pixabay.com/photo/2016/08/31/21/47/burger-1634705_1280.jpg'),
    new Recipe(
      'Another delicious burger',
      'A delicious meaty burger again',
      'https://cdn.pixabay.com/photo/2016/08/31/21/47/burger-1634705_1280.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
