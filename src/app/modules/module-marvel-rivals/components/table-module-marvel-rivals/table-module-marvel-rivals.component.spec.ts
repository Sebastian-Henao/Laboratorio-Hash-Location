import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableModuleMarvelRivalsComponent } from './table-module-marvel-rivals.component';

describe('TableModuleMarvelRivalsComponent', () => {
  let component: TableModuleMarvelRivalsComponent;
  let fixture: ComponentFixture<TableModuleMarvelRivalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableModuleMarvelRivalsComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(TableModuleMarvelRivalsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
