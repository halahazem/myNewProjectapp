import { Directive } from '@angular/core';

/**
 * Generated class for the AnyThingDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[any-thing]' // Attribute selector
})
export class AnyThingDirective {

  constructor() {
    console.log('Hello AnyThingDirective Directive');
  }

}
