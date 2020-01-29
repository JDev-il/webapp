import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextualdataComponent } from './textualdata.component';

describe('TextualdataComponent', () => {
  let component: TextualdataComponent;
  let fixture: ComponentFixture<TextualdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextualdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextualdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
