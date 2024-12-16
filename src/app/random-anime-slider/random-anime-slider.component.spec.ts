import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomAnimeSliderComponent } from './random-anime-slider.component';

describe('RandomAnimeSliderComponent', () => {
  let component: RandomAnimeSliderComponent;
  let fixture: ComponentFixture<RandomAnimeSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomAnimeSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomAnimeSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
