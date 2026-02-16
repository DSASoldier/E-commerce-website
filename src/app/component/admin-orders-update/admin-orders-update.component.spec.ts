import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrdersUpdateComponent } from './admin-orders-update.component';

describe('AdminOrdersUpdateComponent', () => {
  let component: AdminOrdersUpdateComponent;
  let fixture: ComponentFixture<AdminOrdersUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminOrdersUpdateComponent]
    });
    fixture = TestBed.createComponent(AdminOrdersUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
