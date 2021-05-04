import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosFiscalesFormComponent } from './datos-fiscales-form.component';

describe('DatosFiscalesFormComponent', () => {
  let component: DatosFiscalesFormComponent;
  let fixture: ComponentFixture<DatosFiscalesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosFiscalesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosFiscalesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
