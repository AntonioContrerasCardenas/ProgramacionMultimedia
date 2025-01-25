import { Component, inject, OnInit } from '@angular/core';
import { Category } from '../../../core/interfaces/questions.interfaces';
import { CategoryService } from '../../../core/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'categories-display',
  standalone: true,
  imports: [],
  templateUrl: './categories-display.component.html',
  styleUrl: './categories-display.component.scss',
})
export class CategoriesDisplayComponent implements OnInit {
  public categories: Category[] = [];
  private categoryService = inject(CategoryService);
  private router = inject(Router);

  selectCategory(categoryId: string) {
    this.router.navigate(['/category', categoryId]);
  }
  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }
}
