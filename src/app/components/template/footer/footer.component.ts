import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedin, faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faWhatsapp = faWhatsapp;
  faTelegram = faTelegram;
  constructor(){}
  ngOnInit(): void {

  }
}
