import { Component, inject, OnInit } from '@angular/core';
import { Category } from '../../../core/interfaces/questions.interfaces';
import { CategoryService } from '../../../core/services/category.service';
import { Router } from '@angular/router';
import { AutoDestroyService } from '../../../core/services/auto-destroy.service';
import { takeUntil } from 'rxjs';

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
  private autoDestroy$ = inject(AutoDestroyService);
  private router = inject(Router);

  selectCategory(categoryId: string) {
    this.router.navigate(['/category', categoryId]);
  }
  ngOnInit(): void {
    this.categoryService
      .getAllCategories()
      .pipe(takeUntil(this.autoDestroy$))
      .subscribe((categories) => {
        this.categories = categories;
      });
  }
}
