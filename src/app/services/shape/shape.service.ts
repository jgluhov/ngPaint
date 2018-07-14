import { Injectable } from '@angular/core';
import { GuiService } from '@services/gui/gui.service';
import { Point2D } from '@math';
import { Shape } from '@shapes/shape';
import { PolylineShape, CircleShape, RectShape } from '@shapes';

@Injectable({
  providedIn: 'root'
})
export class ShapeService {

  constructor(private guiService: GuiService) {
  }

  createPolyline = (point: Point2D): Shape => {
    const { currentStrokeWidth, currentStroke }: GuiService = this.guiService;

    return new PolylineShape([point], currentStrokeWidth, currentStroke);
  }

  createCircle = (center: Point2D, fill: boolean = false): Shape => {
    const { currentStrokeWidth, currentStroke }: GuiService = this.guiService;

    const fillShape = fill ? currentStroke : 'none';

    return new CircleShape(center, currentStroke, currentStrokeWidth, fillShape);
  }

  createRect = (edge: Point2D): Shape => {
    const { currentStrokeWidth, currentStroke }: GuiService = this.guiService;

    return new RectShape(edge, currentStroke, currentStrokeWidth);
  }
}
