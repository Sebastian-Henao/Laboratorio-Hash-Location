import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableModuleLolComponent } from './table-module-lol.component';

describe('TableModuleLolComponent', () => {
  let component: TableModuleLolComponent;
  let fixture: ComponentFixture<TableModuleLolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableModuleLolComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(TableModuleLolComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
