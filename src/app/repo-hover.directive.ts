import { Directive, ElementRef ,Renderer2, HostListener} from '@angular/core';

@Directive({
  selector: '[appRepoHover]'
})
export class RepoHoverDirective {

  constructor(private elementRef:ElementRef,private renderer:Renderer2) { }

  @HostListener('mouseenter') mouseover(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'cyan');
  }
  @HostListener('mouseleave') mouseleave(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'black');
    
  }
}


