import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../services/category.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './product-form.html'
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;
  isEditMode = false;
  productId: string | null = null;
  categories: any[] = [];

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      category: ['', Validators.required],
      image: ['', Validators.required],
      available_quantity: [0, [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit() {
    this.loadCategories();
    this.productId = this.route.snapshot.paramMap.get('id');
    if (this.productId) {
      this.isEditMode = true;
      this.productService.getProduct(this.productId).subscribe(product => {
        this.productForm.patchValue(product);
      });
    }
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      if (this.isEditMode && this.productId) {
        this.productService.updateProduct(this.productId, this.productForm.value).subscribe({
          next: () => this.router.navigate(['/products']),
          error: (err) => alert('Error updating product: ' + err.message)
        });
      } else {
        this.productService.addProduct(this.productForm.value).subscribe({
          next: () => this.router.navigate(['/products']),
          error: (err) => alert('Error adding product: ' + err.message)
        });
      }
    }
  }
}
