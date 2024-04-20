import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'logo',
  imports: [RouterLink],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  template: `
  <a routerLink="/" aria-label="Brand">
    <!-- <svg class="hover:text-primary" width="25" height="25" viewBox="0 0 9 8" fill="none">
      <path d="M1 6.99999L0.999981 4L1.00001 0.999975L4.16633 0.999921L7.00004 6.99985" stroke="currentColor"
        stroke-linecap="round" />
      <path d="M7.49998 1L3.49998 3.5L3.49998 5L3.49998 6.5L7.49998 4" stroke="currentColor" stroke-linecap="round" />
    </svg> -->
    <svg style="font-family: 'Russo One', sans-serif; width: 100%; height: 100%;"  width="225" height="30" class="hover:text-primary" >
    <style>
      text {
        animation: stroke 6s infinite alternate;
        stroke-width: 3;
        stroke: #3867d6;
        font-size: 30px;
      }
      @keyframes stroke {
        0%   {
          fill: rgba(72,138,204,0); stroke: rgba(54,95,160,1);
          stroke-dashoffset: 25%; stroke-dasharray: 0 50%; stroke-width: 2;
        }
        70%  {fill: rgba(72,138,204,0); stroke: rgba(54,95,160,1); }
        80%  {fill: rgba(72,138,204,0); stroke: rgba(54,95,160,1); stroke-width: 1; }
        100% {
          fill: rgba(72,138,204,1); stroke: rgba(54,95,160,0);
          stroke-dashoffset: -25%; stroke-dasharray: 25% 0; stroke-width: 0;
        }
      }
    </style>
    <text x="50%" y="50%" dy=".35em" text-anchor="middle">
      UmeshXCoder
    </text>
  </svg>
  </a>
`
})
export class Logo { } 
