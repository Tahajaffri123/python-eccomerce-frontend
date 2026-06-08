import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './category-list.html'
})
export class CategoryListComponent implements OnInit {
  categories: any[] = [];
  categoryForm: FormGroup;
  isEditMode = false;
  currentCategoryId: string | null = null;

  constructor(private categoryService: CategoryService, private fb: FormBuilder) {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
      description: ['']
    });
  }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe(data => this.categories = data);
  }

  onSubmit() {
    if (this.categoryForm.valid) {
      if (this.isEditMode && this.currentCategoryId) {
        this.categoryService.updateCategory(this.currentCategoryId, this.categoryForm.value).subscribe(() => {
          this.loadCategories();
          this.resetForm();
        });
      } else {
        this.categoryService.addCategory(this.categoryForm.value).subscribe(() => {
          this.loadCategories();
          this.resetForm();
        });
      }
    }
  }

  editCategory(cat: any) {
    this.isEditMode = true;
    this.currentCategoryId = cat.id;
    this.categoryForm.patchValue({
      name: cat.name,
      description: cat.description
    });
  }

  deleteCategory(id: string) {
    if (confirm('Delete this category? All related products might be affected.')) {
      this.categoryService.deleteCategory(id).subscribe(() => this.loadCategories());
    }
  }

  resetForm() {
    this.isEditMode = false;
    this.currentCategoryId = null;
    this.categoryForm.reset();
  }
}
