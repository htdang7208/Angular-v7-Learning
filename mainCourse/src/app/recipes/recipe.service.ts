import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    // recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe', 
            'This is simply a test', 
            'https://img.bestrecipes.com.au/LRV-X-2Y/w643-h428-cfill-q90/br/2018/04/delicious-spotty-dotty-cookies-recipe-521147-1.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe(
            'BBB Test Recipe', 
            'This is simply a test', 
            'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/8/7/0/FNK_10-Things-Cast-Iron-Skillet-Opener-Marble_s4x3.jpg.rend.hgtvcom.966.725.suffix/1438964284641.jpeg',
            [
                new Ingredient('Bens', 2),
                new Ingredient('Meat', 1)
            ]),
        new Recipe(
            'Another Recipe', 
            'This is simply a test', 
            'https://img.bestrecipes.com.au/LRV-X-2Y/w643-h428-cfill-q90/br/2018/04/delicious-spotty-dotty-cookies-recipe-521147-1.jpg',
            [])
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}