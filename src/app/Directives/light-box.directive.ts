import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[LightBox]'
})
export class LightBoxDirective implements OnChanges {
  @Input('LightBox') highLightColor:string="yellow";
  @Input() defaultcolore :string="darkblue";
  constructor(private elemRef:ElementRef) {
    // this.elemRef.nativeElement.style.border=`2px solid ${this.defaultcolore}`
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.elemRef.nativeElement.style.border=`2px solid ${this.defaultcolore}`

  }
  @HostListener('mouseover') OnMouseOver()
  {
    this.elemRef.nativeElement.style.border=`3px solid ${this.highLightColor}`
  }
  @HostListener('mouseout') OnMouseOut()
  {
    this.elemRef.nativeElement.style.border=`3px solid ${this.defaultcolore}`

  }
}
