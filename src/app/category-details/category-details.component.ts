import {Component, Input, OnInit} from '@angular/core';
import {Category} from "../model/category";
import {CategoriesListComponent} from "../categories-list/categories-list.component";
import {CategoryService} from "../category.service";

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {


  @Input() category: Category;

  constructor(private categoryService:CategoryService, private listCategories:CategoriesListComponent) { }

  ngOnInit() {
  }

  updateCategory() {
    this.categoryService.updateCategory(this.category.id,
      { name: this.category.name, description: this.category.description})
      .subscribe(
        data => {
          console.log(data);
          this.category = data as Category;
        },
        error => console.log(error));
  }

  deleteCategory() {
    this.categoryService.deleteCategory(this.category.id)
      .subscribe(
        data => {
          console.log(data);
          this.listCategories.reloadData();
        },
        error => console.log(error));
  }
}
