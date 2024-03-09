import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveTeacherComponent } from './executive-teacher.component';

describe('ExecutiveTeacherComponent', () => {
  let component: ExecutiveTeacherComponent;
  let fixture: ComponentFixture<ExecutiveTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExecutiveTeacherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExecutiveTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
