import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartcomponentComponent } from './cartcomponent.component';

describe('CartcomponentComponent', () => {
  let component: CartcomponentComponent;
  let fixture: ComponentFixture<CartcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
