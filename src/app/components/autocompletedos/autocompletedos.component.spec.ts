import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompletedosComponent } from './autocompletedos.component';

describe('AutocompletedosComponent', () => {
  let component: AutocompletedosComponent;
  let fixture: ComponentFixture<AutocompletedosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutocompletedosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutocompletedosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
