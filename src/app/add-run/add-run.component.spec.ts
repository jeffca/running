import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRunComponent } from './add-run.component';

describe('AddRunComponent', () => {
  let component: AddRunComponent;
  let fixture: ComponentFixture<AddRunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
