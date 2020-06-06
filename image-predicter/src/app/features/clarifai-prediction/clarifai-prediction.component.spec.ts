import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClarifaiPredictionComponent } from './clarifai-prediction.component';

describe('ClarifaiPredictionComponent', () => {
  let component: ClarifaiPredictionComponent;
  let fixture: ComponentFixture<ClarifaiPredictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClarifaiPredictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClarifaiPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
