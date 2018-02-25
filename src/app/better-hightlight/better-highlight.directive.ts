import {
    Directive,
    ElementRef,
    HostBinding,
    HostListener,
    Input,
    OnInit,
    Renderer2}
    from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
    @Input() defaultColor: string = 'transparent';
    @Input() hightlightColor: string = 'blue';
    @HostBinding('style.backgroundColor') backgroundColor: string;
    @HostBinding('style.color') color: string = 'black';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
      this.backgroundColor = this.defaultColor;
  }

  // naming of argument and method MATTERS!
  @HostListener('mouseenter') mouseover() {
    //this.renderer.setStyle(this.elRef.nativeElement, 'padding', '30px');
    this.backgroundColor = this.hightlightColor;
    this.color = 'white';
  }

  @HostListener('mouseleave') mouseleave() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent', false, false);
    this.backgroundColor = this.defaultColor;
      this.color = 'black';
  }
}
