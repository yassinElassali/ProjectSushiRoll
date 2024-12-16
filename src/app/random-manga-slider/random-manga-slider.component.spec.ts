import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomMangaSliderComponent } from './random-manga-slider.component';

describe('RandomMangaSliderComponent', () => {
  let component: RandomMangaSliderComponent;
  let fixture: ComponentFixture<RandomMangaSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomMangaSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomMangaSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
