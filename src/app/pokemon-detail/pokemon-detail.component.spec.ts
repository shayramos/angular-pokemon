import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataService } from '../core/services/data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PokemonDetailComponent } from './pokemon-detail.component';
import { ActivatedRoute } from '@angular/router';

describe('PokemonDetailComponent', () => {
  let component: PokemonDetailComponent;
  let fixture: ComponentFixture<PokemonDetailComponent>;
  const fakeActivatedRoute = {
    snapshot: { 
      paramMap: {
        get(name) {
        },
      } 
    }
  } as ActivatedRoute;
  let myService: DataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        HttpClientTestingModule 
      ],
      declarations: [ PokemonDetailComponent ],
      providers: [DataService, NgxSpinnerService,
        {
          provide: ActivatedRoute, useValue: fakeActivatedRoute
        }
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    myService = TestBed.get(DataService);
  });

  it('should create the app', async(inject([DataService], (myService: DataService) => {
    expect(component).toBeTruthy();
  })));

  it('should call getCardsByName method on init', () => {
    const mySpy = spyOn(myService, 'getCard').and.callThrough();

    component.getACard();

    expect(mySpy).toHaveBeenCalledTimes(1);
  });

});
