import { Injectable } from '@angular/core';
import { GuiService } from '@services/gui/gui.service';
import { Point2D } from '@math';
import { Shape } from '@shapes/shape';
import { PolylineShape, CircleShape } from '@shapes';

@Injectable({
  providedIn: 'root'
})
export class ShapeService {

  constructor(private guiService: GuiService) {
  }

  createPolyline(...points: Point2D[]): Shape {
    const { currentStrokeWidth, currentStroke }: GuiService = this.guiService;

    return new PolylineShape(points, currentStrokeWidth, currentStroke);
  }

  createCircle(center: Point2D): Shape {
    const { currentStrokeWidth, currentStroke }: GuiService = this.guiService;

    return new CircleShape(center, currentStroke, currentStrokeWidth, currentStroke);
  }
}
