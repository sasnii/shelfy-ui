import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseProductComponent } from './choose-product.component';

describe('ChooseProductComponent', () => {
  let component: ChooseProductComponent;
  let fixture: ComponentFixture<ChooseProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
