import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExSelectRoleComponent } from './ex-select-role.component';

describe('ExSelectRoleComponent', () => {
  let component: ExSelectRoleComponent;
  let fixture: ComponentFixture<ExSelectRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExSelectRoleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExSelectRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
