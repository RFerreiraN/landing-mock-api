import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosLimpiezaDetallesComponent } from './productos-limpieza-detalles.component';

describe('ProductosLimpiezaDetallesComponent', () => {
  let component: ProductosLimpiezaDetallesComponent;
  let fixture: ComponentFixture<ProductosLimpiezaDetallesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductosLimpiezaDetallesComponent]
    });
    fixture = TestBed.createComponent(ProductosLimpiezaDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
