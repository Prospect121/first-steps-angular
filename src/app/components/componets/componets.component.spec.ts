import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponetsComponent } from './componets.component';

describe('ComponetsComponent', () => {
  let component: ComponetsComponent;
  let fixture: ComponentFixture<ComponetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
