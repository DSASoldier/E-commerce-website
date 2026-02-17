import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCannotAccessComponent } from './page-cannot-access.component';

describe('PageCannotAccessComponent', () => {
  let component: PageCannotAccessComponent;
  let fixture: ComponentFixture<PageCannotAccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageCannotAccessComponent]
    });
    fixture = TestBed.createComponent(PageCannotAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
