import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthGuardPagesComponent } from './auth-guard-pages.component';

describe('AuthGuardPagesComponent', () => {
  let component: AuthGuardPagesComponent;
  let fixture: ComponentFixture<AuthGuardPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthGuardPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthGuardPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
