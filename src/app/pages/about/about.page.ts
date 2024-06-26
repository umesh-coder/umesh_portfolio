import { NgFor } from '@angular/common';
import { Component, ViewEncapsulation, inject } from '@angular/core';
import { MetaService } from '@core/services/meta.service';
import profileData from '@data/profile.data';

@Component({
  selector: 'about',
  template: `
  <section class="flex flex-col max-w-screen-lg justify-between mx-auto gap-5 dark:text-gray-200 overflow-y-hidden">
  <h1 class="text-3xl font-semibold dark:text-white">About Me</h1>
  <p class="justify-start">I'm Umesh Shelare, a software
    engineer with over
    6 Months of
    experience. I specialize in turning
    ideas into polished software, blending innovation with user-friendly design. 🚀</p>
  <p *ngFor="let a of aboutDetails"><b class="dark:text-white text-black">{{a.title}}</b><br />{{a.desc}}
  </p>
  <h1 class="text-3xl font-semibold dark:text-white">Contact Information:</h1>
  @for(c of contactInfo; track $index){
    <p>
      <b class="dark:text-white text-black ">{{c.title}}:</b><br />
      <a [href]="c.link" class="hover:underline" target="_blank">{{c.desc}}</a>
    </p>
  }
</section>
`,
  encapsulation: ViewEncapsulation.None,
  imports: [NgFor],
  standalone: true
})
export class AboutPage {
  metaService = inject(MetaService)
  constructor() {
    this.metaService.setMetaTags(
      `About - ${profileData.name}`,
      'Dive into a curated space to learn more about the person behind the name',
      ['bio', 'biography', 'information', 'about', 'contact', 'detail']
    )
  }
  public aboutDetails = [
    {
      title: 'What I Do',
      desc: `I've worked on a variety of projects, ranging from
      mobile apps and web development to optimizing performance, writing clean code, and emphasizing good design
      principles. I take pride in my attention to detail and commitment to creating efficient, well-designed solutions
      that meet both user needs and industry standards. I'm your go-to person for JavaScript frameworks and ensuring
      the overall quality of software development projects.`
    },
    {
      title: 'Always Learning',
      desc: `I'm always eager to learn new things. Whether
      it's staying updated on the latest technologies or exploring different coding techniques, I enjoy expanding my
      knowledge to grow as a developer.`
    },
    {
      title: 'Off-Duty Fun',
      desc: `During my off-duty hours, I find joy in coding, exploring new aspects of coding, and staying updated by reading
      the latest blogs on technology. I also enjoy playing games on my phone, watching videos, listening to popular
      songs, and taking refreshing walks outside. It's important for me to spend quality time with my family and
      friends.`
    },
    {
      title: 'Why I Code',
      desc: `I code because it allows me to turn ideas into
      reality. It's a creative outlet that lets me build useful and innovative solutions. Coding challenges me to
      solve problems and continuously improve my skills. Ultimately, it's my way of making a positive impact through
      technology.`
    },
  ];
  public contactInfo = [
    {
      title: 'Address',
      desc: 'Kapil Nagar, Nari Road, Nagpur City, India',
      link: 'https://maps.app.goo.gl/HsPxp7ENvM89aXhw8'
    },
    {
      title: 'Mobile Number',
      desc: '+91-9284580065',
      link: 'tel:+91-9284580065'
    },
    {
      title: 'Email',
      desc: 'umeshshelare@gmail.com',
      link: 'mailto:umeshshelare@gmail.com'
    },
    {
      title: 'Freelance',
      desc: 'Available',
      link: 'mailto:umeshshelare@gmail.com'
    },
  ]
}
