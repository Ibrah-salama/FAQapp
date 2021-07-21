import { Component, OnInit } from '@angular/core';
import { IQuestion } from 'src/app/models/question';
import { QuestionserviceService } from 'src/app/services/questionservice.service';
@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questions:IQuestion[]
  constructor(public questionService:QuestionserviceService) { 
  }

  ngOnInit(): void {
    this.questions = this.questionService.getQuestions()
  }
  addQuestion(question){
    console.log(question)
    this.questionService.addQuestionToService(question)
  }
}
