import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuModeradorPage } from './menu-moderador.page';

describe('MenuModeradorPage', () => {
  let component: MenuModeradorPage;
  let fixture: ComponentFixture<MenuModeradorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenuModeradorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
