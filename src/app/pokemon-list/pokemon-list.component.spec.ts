import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { DataService } from '../core/services/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PokemonListComponent } from './pokemon-list.component';
import { NgxSpinnerService } from 'ngx-spinner';


describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;
  let myService: DataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        HttpClientTestingModule
      ],
      declarations: [ PokemonListComponent ],
      providers: [
        DataService,
        NgxSpinnerService
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    myService = TestBed.get(DataService);
  });

  it('should create the app', async(inject([DataService], (myService: DataService) => {
    expect(component).toBeTruthy();
  })));

  it('should call getCardsByName method on init', () => {
    const mySpy = spyOn(myService, 'getCardsByName').and.callThrough();

    component.getCards();

    expect(mySpy).toHaveBeenCalledTimes(1);
  });
});
