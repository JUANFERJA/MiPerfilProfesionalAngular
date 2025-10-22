import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaPage } from './experiencia-page';

describe('ExperienciaPage', () => {
  let component: ExperienciaPage;
  let fixture: ComponentFixture<ExperienciaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienciaPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
