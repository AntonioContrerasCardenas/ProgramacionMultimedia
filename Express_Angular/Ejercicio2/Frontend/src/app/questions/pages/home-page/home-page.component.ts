import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { takeUntil } from 'rxjs';
import { Category } from '../../../core/interfaces/questions.interfaces';
import { AutoDestroyService } from '../../../core/services/auto-destroy.service';
import { CategoryService } from '../../../core/services/category.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { QuestionsService } from '../../../core/services/questions.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  public categories: Category[] = [];
  private categoryService = inject(CategoryService);
  private questionsService = inject(QuestionsService);
  private autoDestroy$ = inject(AutoDestroyService);
  private router = inject(Router);

  maxQuestions: number = 0;

  fb = inject(FormBuilder);
  myForm: FormGroup = this.fb.group({
    category: ['', [Validators.required]],
    questionCount: ['', [Validators.required]],
  });

  ngOnInit(): void {
    this.loadCategories();
  }

  onCategoryChange() {
    const categoryId = this.myForm.get('category')?.value;
    if (!categoryId) return;

    this.questionsService
      .getQuestionCountByCategory(categoryId)
      .pipe(takeUntil(this.autoDestroy$))
      .subscribe((count) => {
        this.maxQuestions = count;
        this.myForm.get('questionCount')?.setValue(1);
      });
  }

  getNumbersArray(max: number): number[] {
    return Array.from({ length: max }, (_, i) => i + 1);
  }

  loadCategories() {
    this.categoryService
      .getAllCategories()
      .pipe(takeUntil(this.autoDestroy$))
      .subscribe((categories) => {
        this.categories = categories;
      });
  }

  onSubmit() {
    if (this.myForm.invalid) return;

    const { category, questionCount } = this.myForm.value;

    if (questionCount > 0) {
      this.router.navigate(['/home/questions', category, questionCount]);
    }
  }
}
