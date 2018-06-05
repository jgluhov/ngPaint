import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { timer } from 'rxjs/observable/timer';
import { Subject } from 'rxjs/Subject';
import { OperatorFunction } from 'rxjs/interfaces';
import { of } from 'rxjs/observable/of';
import { PartialObserver } from 'rxjs/Observer';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { merge } from 'rxjs/observable/merge';
import {
  scan,
  filter,
  map,
  share,
  pairwise,
  tap,
  startWith,
  withLatestFrom,
  mergeMap,
  takeUntil,
  switchMap
} from 'rxjs/operators';

export {
  fromEvent,
  of,
  withLatestFrom,
  mergeMap,
  Subject,
  Observable,
  from,
  combineLatest,
  timer,
  scan,
  filter,
  map,
  share,
  pairwise,
  tap,
  startWith,
  OperatorFunction,
  PartialObserver,
  takeUntil,
  merge,
  switchMap
};
