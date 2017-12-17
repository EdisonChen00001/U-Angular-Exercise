import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [ RecipeService ]
})
export class RecipesComponent implements OnInit {

  selectedRecipe:Recipe;
  
  constructor() { }

  ngOnInit() {
    //this.recipes = this.recipeService.getRecipes();
  }
  onRecipeSelected(recipe:Recipe){
    //this.recipeWasSelected.emit(recipe);
  }

}
