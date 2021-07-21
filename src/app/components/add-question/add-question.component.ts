import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { IQuestion } from 'src/app/models/question';
@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  @Output() questionAdded = new EventEmitter<IQuestion>()
  text:string
  answer:string
  constructor() { }

  ngOnInit(): void {
  }
  addQuestion(){
    this.questionAdded.emit({text:this.text,answer:this.answer,hide:true})
  }
}
