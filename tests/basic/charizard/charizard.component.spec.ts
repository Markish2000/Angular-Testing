// Angular
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

// Components
import { CharizardComponent } from '../../../src/app/basic/charizard/charizard.component';

// Services
import { PokemonService } from '../../../src/app/basic/services/pokemon.service';

describe('CharizardComponent', () => {
  let component: CharizardComponent;
  let fixture: ComponentFixture<CharizardComponent>;
  let compiled: HTMLElement;
  let service: PokemonService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharizardComponent],
      imports: [HttpClientTestingModule],
      providers: [PokemonService],
    });
    fixture = TestBed.createComponent(CharizardComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PokemonService);
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  test('should create.', () => {
    expect(component).toBeTruthy();
  });

  test('Debe hacer match con el snapshot.', () => {
    expect(compiled.innerHTML).toMatchSnapshot();
  });

  test('Debe mostrar un loading al inicio.', () => {
    const h2 = compiled.querySelector('h2');
    expect(h2?.textContent).toContain('Loading...');
  });

  test('Debe cargar a Charizard inmediatamente.', () => {
    const dummyPokemon = {
      name: 'Charizardo!!',
      sprites: {
        front_default: 'https://charizard.com/sprite.png',
      },
    };

    const request = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon/6');
    expect(request.request.method).toBe('GET');
    request.flush(dummyPokemon);
    fixture.detectChanges();
    const h3 = compiled.querySelector('h3');
    const img = compiled.querySelector('img');
    expect(h3?.textContent?.toLocaleLowerCase()).toContain(
      dummyPokemon.name.toLowerCase()
    );
    expect(img?.src).toBe(dummyPokemon.sprites.front_default);
    expect(img?.alt).toBe(dummyPokemon.name);
  });
});
