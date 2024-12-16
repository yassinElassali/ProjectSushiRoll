import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaSearchResultComponent } from './manga-search-result.component';

describe('MangaSearchResultComponent', () => {
  let component: MangaSearchResultComponent;
  let fixture: ComponentFixture<MangaSearchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MangaSearchResultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangaSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
