// Angular
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { FatherSonComponent } from '../../../src/app/basic/father-son/father-son.component';

describe('FatherSonComponent', () => {
  let component: FatherSonComponent;
  let fixture: ComponentFixture<FatherSonComponent>;
  let compiled: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FatherSonComponent],
    });
    fixture = TestBed.createComponent(FatherSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    jest.clearAllMocks();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('Debe hacer match con el snapshot', () => {
    expect(compiled).toMatchSnapshot();
  });

  test('No debe aparecer botones si no hay clientes', () => {
    const buttons = compiled.querySelectorAll('button');

    expect(buttons.length).toBe(0);
  });

  test('Debe aparecer 2 botones si hay clientes', () => {
    component.client = { id: 1, name: 'Marcos' };
    fixture.detectChanges();
    const buttons = compiled.querySelectorAll('button');

    expect(buttons.length).toBe(2);
  });

  test('Si hay cliente debe hacer match con el snapshot', () => {
    component.client = { id: 1, name: 'Marcos' };
    fixture.detectChanges();

    expect(compiled).toMatchSnapshot();
  });

  test('Debe emitir onDeleteClient con el botón de eliminar', () => {
    component.client = { id: 1, name: 'Marcos' };
    fixture.detectChanges();

    jest.spyOn(component.onDeleteClient, 'emit');
    const btnDelete = compiled.querySelector('[data-test=btn-delete]');
    btnDelete?.dispatchEvent(new Event('click'));

    expect(component.onDeleteClient.emit).toHaveBeenCalled();
  });

  test('Debe emitir onClienteUpdate con el botón de "Cambiar ID"', () => {
    component.client = { id: 1, name: 'Marcos' };
    fixture.detectChanges();

    jest.spyOn(component.onClientUpdate, 'emit');
    const btnChangeId = compiled.querySelector('[data-test=btn-id]');
    btnChangeId?.dispatchEvent(new Event('click'));

    expect(component.onClientUpdate.emit).toHaveBeenCalledWith({
      id: 5,
      name: 'Marcos',
    });
  });

  test('Deben emitir onChangeClient con el ID especificado SI hay un cliente', () => {
    jest.spyOn(component.onClientUpdate, 'emit');
    component.onChange(10);

    expect(component.onClientUpdate.emit).not.toHaveBeenCalled();

    component.client = { id: 1, name: 'Marcos' };
    fixture.detectChanges();
    component.onChange(10);

    expect(component.onClientUpdate.emit).toHaveBeenCalledWith({
      id: 10,
      name: 'Marcos',
    });
  });
});
