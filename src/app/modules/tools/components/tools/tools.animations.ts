import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

export const animations = [
  trigger('toolState', [
    state('inactive', style({
      transform: 'scale(1)'
    })),
    state('active', style({
      transform: 'scale(1.4)'
    })),
    transition('inactive => active', animate('200ms ease-in-out')),
    transition('active => inactive', animate('100ms ease-out'))
  ])
];
