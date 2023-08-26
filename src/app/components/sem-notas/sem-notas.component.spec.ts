import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemNotasComponent } from './sem-notas.component';

describe('SemNotasComponent', () => {
  let component: SemNotasComponent;
  let fixture: ComponentFixture<SemNotasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SemNotasComponent]
    });
    fixture = TestBed.createComponent(SemNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
