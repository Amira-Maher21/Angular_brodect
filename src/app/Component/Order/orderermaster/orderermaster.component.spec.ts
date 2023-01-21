import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderermasterComponent } from './orderermaster.component';

describe('OrderermasterComponent', () => {
  let component: OrderermasterComponent;
  let fixture: ComponentFixture<OrderermasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderermasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderermasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
