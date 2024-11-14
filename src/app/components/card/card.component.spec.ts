import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardActionsExample } from './card.component';

describe('CardComponent', () => {
  let component: CardActionsExample;
  let fixture: ComponentFixture<CardActionsExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardActionsExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardActionsExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
