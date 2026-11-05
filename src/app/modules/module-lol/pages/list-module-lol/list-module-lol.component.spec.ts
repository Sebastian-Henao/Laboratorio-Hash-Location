import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListModuleLolComponent } from './list-module-lol.component';
import { throwError } from 'rxjs/internal/observable/throwError';
import { ModuleLolService } from '../../services/module-lol.service';
import { TableModuleLolComponent } from '../../components/table-module-lol/table-module-lol.component';
import { LOL_DATA } from '../../../../core/config/lol.config';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ListModuleLolComponent', () => {
  let component: ListModuleLolComponent;
  let fixture: ComponentFixture<ListModuleLolComponent>;
  let moduleLolService: ModuleLolService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListModuleLolComponent, TableModuleLolComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ListModuleLolComponent);
    component = fixture.componentInstance;
    moduleLolService = TestBed.inject(ModuleLolService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia llamar a getAllLol al iniciar', () => {
    const spyGetAllLol = jest.spyOn(moduleLolService, 'getAllLol').mockReturnValue(of(LOL_DATA));
    fixture.detectChanges();
    expect(spyGetAllLol).toHaveBeenCalled();
  });

  it('Deberia asignar los personajes de LoL recibidos del servicio', () => {
    jest.spyOn(moduleLolService, 'getAllLol').mockReturnValue(of(LOL_DATA));
    fixture.detectChanges();
    expect(component.moduleLol).toEqual(LOL_DATA);
  });

  it('Deberia pasar los personajes de LoL al componente table-module-lol', () => {
    jest.spyOn(moduleLolService, 'getAllLol').mockReturnValue(of(LOL_DATA));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement.query(
      By.directive(TableModuleLolComponent),
    ).componentInstance;
    expect(tableComponent.moduleLol).toEqual(LOL_DATA);
  });

  it('debería manejar el error cuando falla getAllLol', () => {
    component.moduleLol = [];
    const errorResponse = new Error('Error al cargar personajes de LoL');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(moduleLolService, 'getAllLol').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(moduleLolService.getAllLol).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.moduleLol.length).toBe(0);
  });
});
