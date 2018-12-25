import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmpProductComponent } from './tmp-product.component';

describe('TmpProductComponent', () => {
  let component: TmpProductComponent;
  let fixture: ComponentFixture<TmpProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmpProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmpProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
