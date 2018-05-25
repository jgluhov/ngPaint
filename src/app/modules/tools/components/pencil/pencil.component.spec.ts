import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ElementRef, Provider } from '@angular/core';
import { PencilComponent } from './pencil.component';
import { CanvasComponent } from '@components/canvas/canvas.component';
import { MouseService } from '@services/mouse';

function provideMouseService(): Provider {
  const container = document.createElement('div');
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('id', 'svg');
  container.appendChild(svg);
  const elRef = new ElementRef(container);

  return {
    provide: MouseService,
    useFactory: (): MouseService => new MouseService(elRef)
  };
}

describe('PencilComponent', () => {
  let component: PencilComponent;
  let fixture: ComponentFixture<PencilComponent>;

  beforeEach(async(() => {
    const elRef = new ElementRef(document.createElement('div'));
    TestBed.configureTestingModule({
      declarations: [
        PencilComponent
      ],
      providers: [
        provideMouseService()
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PencilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
