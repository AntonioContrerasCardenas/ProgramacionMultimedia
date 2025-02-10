import { Component, inject, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CategoryService } from '../../../core/services/category.service';
import {
  Category,
  CreateQuestionRequest,
} from '../../../core/interfaces/questions.interfaces';
import { AutoDestroyService } from '../../../core/services/auto-destroy.service';
import { takeUntil } from 'rxjs';
import { QuestionsService } from '../../../core/services/questions.service';

@Component({
  selector: 'app-create-question-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-question-page.component.html',
  styleUrl: './create-question-page.component.scss',
})
export class CreateQuestionPageComponent implements OnInit {
  private categoryService = inject(CategoryService);
  private questionService = inject(QuestionsService);
  private _autoDestroy$ = inject(AutoDestroyService);
  public categories: Category[] = [];
  public message: string = '';

  fb = inject(FormBuilder);
  myForm: FormGroup = this.fb.group({
    category: ['', [Validators.required]],
    question: ['', [Validators.required, Validators.minLength(5)]],
    answer: ['', [Validators.required, Validators.minLength(5)]],
    options: this.fb.array([], [Validators.required]),
  });

  ngOnInit(): void {
    this.loadCategories();
    this.initializeOptions();
  }

  get options() {
    return this.myForm.get('options') as FormArray;
  }

  initializeOptions() {
    const options = this.myForm.get('options') as FormArray;
    for (let i = 0; i < 3; i++) {
      options.push(
        this.fb.control('', [Validators.required, Validators.minLength(5)])
      );
    }
  }

  loadCategories() {
    this.categoryService
      .getAllCategories()
      .pipe(takeUntil(this._autoDestroy$))
      .subscribe((categories) => {
        this.categories = categories;
      });
  }

  onSubmit() {
    if (this.myForm.invalid) return;
    const { category, question, answer, options } = this.myForm.value;

    options.push(answer);

    const body: CreateQuestionRequest = {
      answer,
      category,
      options,
      question,
    };

    this.questionService
      .createQuestion(body)
      .pipe(takeUntil(this._autoDestroy$))
      .subscribe({
        next: (question) => {
          this.myForm.reset();
          this.message = `Question created successfully`;
        },
        error: (error) => {
          this.message = error.error.message;
        },
      });
  }
}
