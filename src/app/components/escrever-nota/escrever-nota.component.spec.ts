import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscreverNotaComponent } from './escrever-nota.component';

describe('EscreverNotaComponent', () => {
  let component: EscreverNotaComponent;
  let fixture: ComponentFixture<EscreverNotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EscreverNotaComponent]
    });
    fixture = TestBed.createComponent(EscreverNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
