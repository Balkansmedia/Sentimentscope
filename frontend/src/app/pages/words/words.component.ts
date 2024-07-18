import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Word } from 'src/app/Models/Word';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss']
})
export class WordsComponent implements OnInit {
  words: Word[] = [
    new Word('Apple', 'Jabuka', 'A fruit that is sweet and crisp. It is red, green, or yellow in color. It is usually eaten raw, but it can also be cooked. It is a popular fruit in many countries. It is often used in desserts and salads.'),
    new Word('Apricot', 'Lajsija', 'A small, soft fruit with a stone. It is orange in color and has a sweet and tart flavor. Apricots can be eaten fresh, dried, or used in cooking and baking.'),
    new Word('Banana', 'Banana', 'A long curved fruit with a yellow skin. It is sweet and soft, and is often eaten raw. Bananas are also used in baking, cooking, and smoothies. Bananas are also used in baking, cooking, and smoothies. Bananas are also used in baking, cooking, and smoothies. Bananas are also used in baking, cooking, and smoothies.'),
    new Word('Cherry', 'Trešnja', 'A small, round fruit that is red or black. Cherries are sweet or tart and can be eaten fresh or used in desserts, jams, and juices.'),
    new Word('Date', 'Urma', 'A sweet, dark brown fruit with a stone. Dates are chewy and often used in baking and cooking. They are also eaten fresh or dried.'),
    new Word('Dragonfruit', 'Pitaja', 'A fruit with pink skin and white flesh. It has small black seeds and a mildly sweet flavor. Dragonfruit is often eaten fresh or used in smoothies and salads.'),
    new Word('Durian', 'Durian', 'A large, spiky fruit with a strong smell. It has a creamy texture and a sweet, custard-like flavor. Durian is often eaten fresh or used in desserts.'),
    new Word('Elderberry', 'Zova', 'A small, round fruit that is dark purple or black. Elderberries are tart and are often used in syrups, jams, and wines. They are also used for their medicinal properties.'),
    new Word('Eggplant', 'Patlidžan', 'A vegetable with a smooth, dark purple skin. It has a spongy texture and is often used in cooking, particularly in dishes like ratatouille and moussaka.'),
    new Word('Banana', 'Banana', 'A long curved fruit with a yellow skin. It is sweet and soft, and is often eaten raw. Bananas are also used in baking, cooking, and smoothies.'),
    new Word('Bicycle', 'Bicikl', 'A two-wheeled vehicle powered by human effort, usually by pedaling.'),
    new Word('Library', 'Biblioteka', 'An institution or room that contains a collection of books, periodicals, and other printed materials available for reading, research, or borrowing.'),
    new Word('Ship', 'Brod', 'A type of vessel used for navigation on water, typically larger than a boat and capable of longer journeys.'),
    new Word('Baklava', 'Baklava', 'A sweet pastry consisting of layers of thinly sliced dough filled with nuts and drenched in honey or syrup.'),
    new Word('Pool', 'Bazen', 'An artificially constructed water basin used for swimming, recreation, or sporting activities.'),
    new Word('Bleach', 'Bjelilo', 'A chemical substance used for whitening fabrics or paper, often in the form of powder or liquid.'),
    new Word('Fairy Tale', 'Bajka', 'A story, typically for children, involving magical or fantastical beings and events, often with a moral lesson.')
];

  filteredWords: Word[] = [];
  selectedLetter: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.selectedLetter = params.get('letter');
      this.filterWordsByLetter(this.selectedLetter);
    });
  }

  filterWordsByLetter(letter: string | null): void {
    if (letter) {
      this.filteredWords = this.words.filter(word => word.serbian_word.startsWith(letter));
    } else {
      this.filteredWords = []; 
    }
  }
 
}
  