import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaComponent } from './meta.component';

describe('MetaComponent', () => {
  let component: MetaComponent;
  let fixture: ComponentFixture<MetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MetaComponent]
    });
    fixture = TestBed.createComponent(MetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
