import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BlogDataProvider } from '../../providers/blog-data.provider';
import { CategoryModel } from '../../model/category.model';

@Component({
  selector: 'app-category',
  templateUrl: 'category.html',
})
export class CategoryComponent implements OnInit {

  private categories: CategoryModel[];

  constructor(
    private blogDataProvider: BlogDataProvider
  ) {
  }

  ngOnInit(): void {
    this.blogDataProvider.getCategories().subscribe(categories => {
      this.categories = categories;
    })
  }

  filterByCategory() {
    console.log('proximamente!');
  }

}
