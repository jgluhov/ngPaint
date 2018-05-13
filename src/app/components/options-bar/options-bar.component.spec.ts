import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsBarComponent } from './options-bar.component';
import { GeneralModule } from '../../general/general.module';

describe('OptionsBarComponent', () => {
  let component: OptionsBarComponent;
  let fixture: ComponentFixture<OptionsBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        GeneralModule
      ],
      declarations: [
        OptionsBarComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
