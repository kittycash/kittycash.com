import { Component, Renderer2, OnInit, OnDestroy, Inject } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { trigger, style, animate, transition } from '@angular/animations';
import { BlogService } from './blog.service';
import { DownloadService } from '../shared/download.service';
import { DOCUMENT } from '@angular/common';
import * as kitties from './kitties.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
        trigger('trans', [
            transition(
            '* <=> *', [animate(1000, style({opacity: 0})), animate(2000, style({opacity: 1}))])
        ])
    ]
})
export class HomeComponent implements OnInit, OnDestroy {

  articles: any;
  kitties: any;
  isLoading: boolean;
  currentIndex: number = -1;
  rmap: string = 'active';
  cats: Array<any> = [];
  total_cats: number = 30;

  private cat_list: Array<any> = [
      { name: "Doepelt", description: "Doepelt is a heartbreaker with a perfect white pattern that no Tabby can resist. This gentleman will steal your heart and break it."},
      { name: "Francois", description: "Francois is a typical hipster on top of his game with manly handlebar mustache and rebellious Mohawk cut he’s a walking advertisement for his barber shop."},
      { name: "Twinky", description: "Whompyjawed eyes are not a desired appeareance feature amongst the female Kitties, but that pattern and yellow fur are top seller of Twinky.  Get in queue, ladies."},
      { name: "Danny", description: "Perfect even greenish pattern of a tiger, mustache of a lover and “elephant trunk” Travolta hairstyle make Danny a real 1978 rockstar. "},
      { name: "Devilskin", description: "Devilskin’s pattern is a mirror of his temper, fiery warrior with unbreakable will. There’s no challenge he’s scared of, no task he can’t complete."},
      { name: "Troubles", description: "Troubles is always up to something. He’s always on the hunt for some foolish thing to do.  You better avoid him at all cost, or your day might take a quick turn."},
      { name: "Grace", description: "Don’t let the colorful tail fool you, Grace is a catlady live you’ve never seen. If you need someone who’s elegant, but playful, then Grace is your new Tabby."},
      { name: "Violet", description: "Violet is a Scarlett Johansson of KittyCash. Beautiful subtle face, perfect pattern and her fading ultraviolet fur makes her a desired Tabby."},
      { name: "Worrie", description: "Why does she always look so concerned? No one knows, but her name fits that perfectly, meet Worrie."},
      { name: "Mr. White", description: "Mr. White was once a promising chemist, now he cooks crystal meth for the whole Marketplace. Perfect business man."},
      { name: "Emerald", description: "White skin with green flaky pattern indicate that something went wrong down at the KittyCash Nuclear Factor, meet Emerald."},
      { name: "Floyd", description: "Floyd can sense when something’s not alright. His owner Sam died and now he’s looking for a new best friend. Maybe he could protect your house from ghost this time."},
      { name: "Hellboy", description: "Hellboy is a half-Kitty, half- devil who was summoned by evil Katzis to fight for their cause. Now his hatred of Katzis made him join the other side. Which side are you on?"},
      { name: "Harold", description: "Harold is a relaxed, friendly and easy going Kitty. With his best friend Kumar they’re always on a lookout for new adventures."},
      { name: "Stacy", description: "Sweet, caring and fit. A little bit louder, but still love-able Kitty Stacy can make new friends easily. Will you be her friend?"},
      { name: "Tootsie", description: "Tootsie might look cute, but don’t be deceived, there’s a devil hiding under this one-toothed smile. Tootsie in the streets, devil in the sheets."},
      { name: "Binnie", description: "Binnie, once a successful cryptocurrency exchange mascot, now a cute and honest hard-working guy. He makes an amazing companion."},
      { name: "Marilyn", description: "Graceful, intelligent, and full of charm. Marilyn dates only the most exclusive Kitties, and relationship is not what she desires."},
      { name: "Apex", description: "Eyes of a snake, horns of a devil, and looks of a tiger. Apex is the alpha predator of Kittycash you sure want to avoid.  DO NOT TOUCH!"},
      { name: "Spark", description: "She might look confused as much as her eyes, but with her magical unicorn tail Spark is a truly magnificent creature."},
      { name: "Dennis", description: "Those eyes are up to something. Everywhere he goes chaos and havoc follow. We call him Dennis."},
      { name: "Kumar", description: "Kumar usually don’t give a damn shit. If he’s not acting in the KittyWood he’s usually smoking some good catnip."},
      { name: "Blue", description: "Blue is always happy, everywhere and everytime. She’s a beautiful soul filled with joy. Every Kitty breeder needs one Blue in their collection."},
      { name: "Fred", description: "He might look broken on the outside, but deep inside Fred is a nice and caring guy. He might have worked with Binnie at the exchange, but we never got this confirmed."},
      { name: "Al", description: "He’s 35 years old, twice divorced and with 3,000$ in child support. He has seen it all, meet Al."},
      { name: "Sandy", description: "Sandy is rocking that 1978 curly hairstyle with red lips and red cheeks. She met Danny at a local funfair, but things don’t have enough grease these days."},
      { name: "Hypno", description: "We call him Hypno. Not because of his fading green pattern, or his psychic abilities, but because of his eyes that will hypnotize you to buy him and get him everything he desires."},
      { name: "Doubt", description: "Doubt is your typical home Tabby. He likes to run around, play, and eat. If you’re a couch potato you might have just found your soulmate."},
      { name: "Hulk", description: "Great tiger pattern, muscles and seething anger. Hulk is a temperament soul always ready to unleash his fury if he’s not fed his favorite dried fish."},
      { name: "Blaze", description: "Don’t look for mercy if you come across Blaze in the KittyCash World. Foe of many, destroyer of the worlds, and burning with hate."}
  ];

  constructor(@Inject(DOCUMENT) private document: any,
              private renderer: Renderer2,
              private blogService: BlogService,
              private downloadService: DownloadService) {
  	 this.renderer.addClass(document.getElementById("kc"), 'blob');
     this.renderer.removeClass(document.getElementById("kc"), 'under-nav');
     this.renderer.addClass(document.getElementById("bc"), 'show');
     this.renderer.addClass(document.getElementById("sc"), 'show');
     this.kitties = kitties;
  }

  ngOnInit() {
    this.isLoading = true;
    this.blogService.getBlogArticles()
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((articles: any) => { this.articles = articles; });

      this.setCats();

   let __this = this;
    setInterval(() => {

      if (__this.rmap == 'active')
      {
        __this.rmap = 'inactive';
      }
      else
      {
        __this.rmap = 'active';
      }
      this.setCats();
    }, 30000);
  }

  setCats() {
    for (let i = 0; i < 3; i++)
    {
      if (this.currentIndex + 1 >= this.total_cats)
      {
        this.currentIndex = 0;
      }
      else
      {
        this.currentIndex = this.currentIndex + 1;
      }

      let catIndex = this.currentIndex + 1;
      this.cats[i] = {
        name: this.cat_list[this.currentIndex].name,
        priceBTC: "?",
        priceSKY: "?",
        description: this.cat_list[this.currentIndex].description,
        img: "assets/generated_kitties/" + catIndex + ".png"
      };
    }

  }
  ngOnDestroy() {
    this.renderer.removeClass(document.getElementById("kc"), 'blob');
    this.renderer.removeClass(document.getElementById("bc"), 'show');
    this.renderer.removeClass(document.getElementById("sc"), 'show');
    this.renderer.addClass(document.getElementById("kc"), 'under-nav');
    console.log("What?");
  }

  shouldShow(i:number) {
    if (i >= this.currentIndex && i < this.currentIndex + 3)
    {
      return true;
    }
    return false;
  }

  blogPosts() {
    if (this.articles && this.articles.filter)
    {
      return this.articles.filter((item: any, index: number) => index < 3);
    }
  }

  playGame() {
    const element = this.renderer.selectRootElement('#gameFrame');
    setTimeout(() => {
      element.focus();
      element.contentWindow.postMessage('start game', '*');
    }, 0);
  }

  downloadWallet() {
    this.downloadService.getDownloadLink().then(
      url => {
         this.document.location.href = url;
      });
  }


}
