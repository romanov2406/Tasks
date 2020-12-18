import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.scss']
})
export class CenzorComponent implements OnInit {

  words: string = '';
  area: string = '';
  wordsCollection: string[] = [];
  wordsFRomArea: string[] = [];

  constructor() { }

  ngOnInit(): void { }

  addWords(): void {
    this.wordsCollection.push(this.words);
    this.words = '';
  }
  reset(): void {
    this.words = '';
    this.area = '';
    this.wordsCollection = [];
  }
  cenzor(): void {
    let arr = this.area.split(/\b/)
    let censored = arr.map(word => this.wordsCollection.includes(word) ? '*'.repeat(word.length) : word);
    this.area = censored.join('');
  }
}
