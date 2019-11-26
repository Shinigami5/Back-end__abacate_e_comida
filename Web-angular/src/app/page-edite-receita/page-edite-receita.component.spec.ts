import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditeReceitaComponent } from './page-edite-receita.component';

describe('PageEditeReceitaComponent', () => {
  let component: PageEditeReceitaComponent;
  let fixture: ComponentFixture<PageEditeReceitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageEditeReceitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEditeReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
