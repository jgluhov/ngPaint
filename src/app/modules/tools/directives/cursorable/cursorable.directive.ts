import { Directive, OnInit, Input } from '@angular/core';
import { AppState } from '@store/app-state';
import { Observable } from 'rxjs/Observable';
import { Tool } from '@models/tool';

@Directive({
  selector: '[appCursorable]'
})
export class CursorableDirective implements OnInit {
  @Input('appCursorable') toolChanges: Observable<Tool>;
  constructor() {
  }

  ngOnInit(): void {

  }

}
