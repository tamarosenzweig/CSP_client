import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmpTicketComponent } from './tmp-ticket.component';

describe('TmpTicketComponent', () => {
  let component: TmpTicketComponent;
  let fixture: ComponentFixture<TmpTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmpTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmpTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
