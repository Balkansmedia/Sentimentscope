import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Article } from 'src/app/Models/Article';
import { ArticleServiceService } from 'src/app/services/article-service.service';
import { CategoryService } from 'src/app/services/category.service';
import { Comment } from 'src/app/Models/Comment';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  constructor(private toastrService: ToastrService,
    private articleService: ArticleServiceService,
    private CategoryService : CategoryService,
    private spinner: NgxSpinnerService ) { }
  

  articles: Article[]= [];
  selectedArticleId: number | null = null;
  categories!: string[] ;
  selectedCategory!: string;
  selectedArticle!: Article;
  comments: Comment[]=[];

  
  ngOnInit(): void {
    
    this.loadArticles();
    this.loadCategories();
    this.comments = this.comments.reverse(); 
   
  }


  loadCategories() {
    this.spinner.show();
    this.CategoryService.getAllCategory().subscribe((data: string[]) => {
      this.categories = data;
      this.spinner.hide();
    }, () => {
      this.spinner.hide();
    });
  }

  loadArticles() {
    this.spinner.show();
    this.articleService.getAllArticles().subscribe((data: Article[]) => {
      this.articles = data;
      this.spinner.hide();
    }, () => {
      this.spinner.hide();
    });
  }

  loadArticlesByCategory(category: string) {
    this.spinner.show();
    if (category) {
      this.articleService.getAllArticles().subscribe((data: Article[]) => {
        this.articles = data.filter(article => article.category === category);
        this.spinner.hide();
      }, () => {
        this.spinner.hide();
      });
    } else {
      this.loadArticles();
    }
  }


  selectArticle(articleId: number) {
    this.spinner.show();
    this.selectedArticleId = articleId;
    this.articleService.getArticleById(articleId).subscribe((data: Article) => {
      this.selectedArticle = data;
      this.comments = data.comments;
      this.spinner.hide();
    }, () => {
      this.spinner.hide();
    });
  }

  onCategoryChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedCategory = selectElement.value;
    this.loadArticlesByCategory(this.selectedCategory);
  }
}