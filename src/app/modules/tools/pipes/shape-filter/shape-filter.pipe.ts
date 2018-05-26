import { Pipe, PipeTransform } from '@angular/core';
import { Shape } from '@tools/shapes/shape';

@Pipe({
  name: 'shapeFilter'
})
export class ShapeFilterPipe implements PipeTransform {

  transform(shapes: Shape[], type: string): Shape[] {
    return shapes.filter((shape: Shape) => shape.type === type);
  }

}
