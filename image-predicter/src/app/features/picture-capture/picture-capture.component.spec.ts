import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureCaptureComponent } from './picture-capture.component';

describe('PictureCaptureComponent', () => {
  let component: PictureCaptureComponent;
  let fixture: ComponentFixture<PictureCaptureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureCaptureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureCaptureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
