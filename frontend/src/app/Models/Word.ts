export class Word {
    english_word: string;
    serbian_word: string;
    description: string;
  
    constructor(english_word: string, serbian_word: string, description: string) {
      this.english_word = english_word;
      this.serbian_word = serbian_word;
      this.description = description;
    }
  }
  