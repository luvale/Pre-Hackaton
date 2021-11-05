import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEliPComponent } from './menu-eli-p.component';

describe('MenuEliPComponent', () => {
  let component: MenuEliPComponent;
  let fixture: ComponentFixture<MenuEliPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuEliPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuEliPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
