import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appCourseEditDirective]',
})
export class CourseEditDirectiveDirective {
  @Input() appUserRole: string[]; // Input to get the user's role
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    if (this.appUserRole.includes('Instructor')) {
      this.renderer.setStyle(this.el.nativeElement.querySelector('.edit-button'), 'display', 'block');
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement.querySelector('.edit-button'), 'display', 'none');
  }
}
