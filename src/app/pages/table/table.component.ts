import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { DataSourceProduct } from './data-source';
import { BtnComponent } from '../../components/btn/btn.component';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { CdkTableModule } from '@angular/cdk/table';

interface Product {
  id: string;
  title: string;
  price: number;
  images: string[];
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    NavbarComponent,
    CommonModule,
    BtnComponent,
    ReactiveFormsModule,
    CdkTableModule,
  ],
  templateUrl: './table.component.html',
})
export class TableComponent {
  dataSource = new DataSourceProduct();
  columns: string[] = ['#No', 'Name', 'price', 'cover', 'actions'];
  total = 0;
  input = new FormControl('', { nonNullable: true });

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => {
        this.dataSource.init(data);
        this.total = this.dataSource.getTotal();
      });

    this.input.valueChanges.pipe(debounceTime(300)).subscribe((value) => {
      this.dataSource.find(value);
    });
  }

  update(product: Product) {
    this.dataSource.update(product.id, { price: 20 });
  }
}
