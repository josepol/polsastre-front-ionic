import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BlogDataProvider } from '../../providers/blog-data.provider';
import { CategoryModel } from '../../model/category.model';

@Component({
  selector: 'app-category',
  templateUrl: 'category.html',
})
export class CategoryComponent implements OnInit {

  @Output() categoryChange: EventEmitter<string> = new EventEmitter<string>();

  private categories: CategoryModel[];

  constructor(
    private blogDataProvider: BlogDataProvider
  ) {
  }

  ngOnInit(): void {
    this.blogDataProvider.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  filterByCategory(category) {
    this.categoryChange.emit(category.name ? category.name : '');
  }

}
