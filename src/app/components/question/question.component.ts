import { Component, OnInit,Input } from '@angular/core';
import { IQuestion } from 'src/app/models/question';
import { QuestionserviceService } from 'src/app/services/questionservice.service';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input('question') question:IQuestion
  constructor(public questionService:QuestionserviceService) { 
  }
  ngOnInit(): void {
  }

  removeQuestion(question){
    this.questionService.removeQuestion(question)
  }
}
