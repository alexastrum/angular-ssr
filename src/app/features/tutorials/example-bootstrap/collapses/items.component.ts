import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// eslint-disable-next-line
declare const bootstrap: any;

@Component({
  selector: 'app-collapse',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  closeCollapse() {
    if (isPlatformBrowser(this.platformId)) {
      const myCollapse = document.getElementById('collapseWidthJavascript');
      new bootstrap.Collapse(myCollapse, {
        hide: true,
      });
    }
  }

  showCollapse() {
    if (isPlatformBrowser(this.platformId)) {
      const myCollapse = document.getElementById('collapseWidthJavascript');
      new bootstrap.Collapse(myCollapse, {
        show: true,
      });
    }
  }

  toggleCollapse() {
    if (isPlatformBrowser(this.platformId)) {
      const myCollapse = document.getElementById('collapseWidthJavascript');
      new bootstrap.Collapse(myCollapse, {
        toggle: true,
      });
    }
  }
}
