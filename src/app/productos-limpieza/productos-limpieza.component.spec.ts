import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosLimpiezaComponent } from './productos-limpieza.component';

describe('ProductosLimpiezaComponent', () => {
  let component: ProductosLimpiezaComponent;
  let fixture: ComponentFixture<ProductosLimpiezaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductosLimpiezaComponent]
    });
    fixture = TestBed.createComponent(ProductosLimpiezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
