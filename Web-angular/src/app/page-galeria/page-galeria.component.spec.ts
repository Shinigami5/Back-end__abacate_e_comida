import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGaleriaComponent } from './page-galeria.component';

describe('PageGaleriaComponent', () => {
  let component: PageGaleriaComponent;
  let fixture: ComponentFixture<PageGaleriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageGaleriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
