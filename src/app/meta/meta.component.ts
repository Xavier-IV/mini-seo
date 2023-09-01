import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Clipboard} from '@angular/cdk/clipboard';

interface Metas {
  url: string;
  type: string;
  description: string;
  keywords: string;
  title: string;
  author: string;
  image: string;

  twitter: {
    site?: string;
    creator: string;
  }
}

@Component({
  selector: 'app-meta',
  templateUrl: './meta.component.html',
  styleUrls: ['./meta.component.css']
})
export class MetaComponent {

  dom?: Document;
  @Input() metas?: Metas;

  @ViewChild('generated') generated: ElementRef<HTMLDivElement> | undefined = undefined;


  constructor(private clipboard: Clipboard) {
  }

  copy(){
    if (!this.generated?.nativeElement.innerText) return;
    this.clipboard.copy(this.generated?.nativeElement.innerText.toString())
  }
}
