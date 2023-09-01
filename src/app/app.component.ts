import { Component } from '@angular/core';
import {Form, FormControl} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  steps = 0

  web_title = new FormControl('');
  description = new FormControl('')
  url = new FormControl('')
  keywords = new FormControl('')
  author = new FormControl('')
  image = new FormControl('')
  twitterCreator = new FormControl('')
  title = 'mini-seo';

  next() {
    if (this.steps === 0 && !this.web_title.value) {
      return
    }
    this.steps++
  }

  back() { this.steps--; }

  edit() {
    this.steps = 0;
  }

  get disabled() {
    switch(this.steps) {
      case 0:
        return !this.web_title.value || this.web_title.value.length < 2;
      case 1:
        return !this.description.value || this.description.value.length < 2;
      default:
        return false;
    }
  }

  get disabledClass() {
    if (this.disabled) return 'disabled';
    return '';
  }

  stepperWidth() {
    return `${Math.floor((this.steps + 1)/8 * 100)}%`;
  }

  get assetGif() {
    switch(this.steps) {
      case 0:
        return '/assets/videos/title_preview.gif';
      case 1:
        return '/assets/videos/description_preview.gif';
      case 2:
        return '/assets/videos/url_preview.gif';
      case 3:
        return '/assets/videos/keyword_preview.gif';
      case 4:
        return '/assets/videos/author_preview.gif';
      case 5:
        return '/assets/videos/image_preview.gif';
      case 6:
        return '/assets/videos/twitter_preview.gif';
      default:
        return null;
    }
  }

  get tutoDescription() {
    switch(this.steps) {
      case 0:
        return 'Give your site a name'
      case 1:
        return 'Provide a description';
      case 2:
        return 'Copy the URL';
      case 3:
        return 'Provide some keywords';
      case 4:
        return 'Its...you!';
      case 5:
        return 'Provide website image';
      case 6:
        return 'Your twitter handle';
      default:
        return null
    }
  }

  get tips() {
    switch(this.steps) {
      case 5:
        return 'Provide a full screen crop, if possible';
      default:
        return null
    }
  }

  async preview() {
    await this.typewrite('Zafranudin Zafrin', this.web_title)
    await this.delay(2000)
    this.steps++
    await this.typewrite('A software engineer', this.description)
    await this.delay(2000)
    this.steps++
    await this.typewrite('https://zafranudin.dev', this.url)
    await this.delay(2000)
    this.steps++
    await this.typewrite('website,blog,personal', this.keywords)
    await this.delay(2000)
    this.steps++
    await this.typewrite('Zafranudin Zafrin', this.author)
    await this.delay(2000)
    this.steps++
    await this.typewrite('https://abc.com/image.png', this.image)
    await this.delay(2000)
    this.steps++
    await this.typewrite('@MohdZafranudin', this.twitterCreator)
    await this.delay(2000)
    this.steps++
  }

  async typewrite(text = '', component: FormControl<string | null>) {
    let result = ''
    const split = text.split('');
    for (let i = 0; i < split.length; i++) {
      result += split[i]
      component.setValue(result)
      await this.delay(40);
    }
  }

  delay(t: number) {
    return new Promise(resolve => setTimeout(resolve, t));
  }

}
