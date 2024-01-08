import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginModeradorPage } from './login-moderador.page';

describe('LoginModeradorPage', () => {
  let component: LoginModeradorPage;
  let fixture: ComponentFixture<LoginModeradorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginModeradorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
