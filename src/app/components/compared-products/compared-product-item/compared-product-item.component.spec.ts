import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparedProductItemComponent } from './compared-product-item.component';

describe('ComparedProductItemComponent', () => {
  let component: ComparedProductItemComponent;
  let fixture: ComponentFixture<ComparedProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComparedProductItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComparedProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
