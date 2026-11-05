import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { MarvelRivalsComponent } from './marvel-rivals.component';

describe('MarvelRivalsComponent', () => {
  let component: MarvelRivalsComponent;
  let fixture: ComponentFixture<MarvelRivalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarvelRivalsComponent],
      imports: [RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(MarvelRivalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
