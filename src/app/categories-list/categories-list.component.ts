import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Category} from "../model/category";
import {CategoryService} from "../category.service";

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  categories: Observable<Category[]>;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.reloadData();
  }

  deleteCategories(){
    this.categoryService.deleteAll().subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log('ERREUR: '+error));
  }
  reloadData() {
    this.categories = this.categoryService.getCategoriesList();
  }
}
