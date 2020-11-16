import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleMenuSaveComponent } from './role-menu-save.component';

describe('RoleMenuSaveComponent', () => {
  let component: RoleMenuSaveComponent;
  let fixture: ComponentFixture<RoleMenuSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleMenuSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleMenuSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
