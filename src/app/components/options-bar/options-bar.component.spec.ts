import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { PanelComponent } from '@components';
import { ColorPickerComponent } from '@components/color-picker/color-picker.component';

import { OptionsBarComponent } from './options-bar.component';
import { GuiService } from '@services/gui/gui.service';

describe('OptionsBarComponent', () => {
  let component: OptionsBarComponent;
  let fixture: ComponentFixture<OptionsBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PanelComponent,
        OptionsBarComponent,
        ColorPickerComponent
      ],
      imports: [
        FormsModule
      ],
      providers: [
        GuiService
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
