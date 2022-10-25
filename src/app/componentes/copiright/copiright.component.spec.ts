import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopirightComponent } from './copiright.component';

describe('CopirightComponent', () => {
  let component: CopirightComponent;
  let fixture: ComponentFixture<CopirightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopirightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopirightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
