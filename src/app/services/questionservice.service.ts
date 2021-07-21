import { Injectable } from '@angular/core';
import { IQuestion } from 'src/app/models/question';
@Injectable({
  providedIn: 'root'
})
export class QuestionserviceService {
  questions:IQuestion[]
  constructor() { 
    // this.questions= [
    //   {
    //     text:"What is your name?",
    //     answer:"My name is ibrahim.",
    //     hide:true
    //   },
    //   {
    //     text:"What is your favourit color?",
    //     answer:"My favourit color is blue.",
    //     hide:true
    //   },
    //   {
    //     text:"What is your favourit language?",
    //     answer:"My favourit languae is javascript.",
    //     hide:true
    //   }
    // ]
  }
  getQuestions(){
    if(localStorage.getItem('questions') === null){
      this.questions = []
    }else{
      this.questions = JSON.parse(localStorage.getItem('questions'))
    }
    return this.questions
  }
  addQuestionToService(question){
    if(localStorage.getItem('question') === null){
      this.questions.push(question)
      localStorage.setItem('questions',JSON.stringify(this.questions))
    }else{
      let questionItems =JSON.parse(localStorage.getItem('questions'))
      questionItems.unshift(question)
      this.questions = questionItems
      localStorage.setItem('questions',JSON.stringify(this.questions))
    }
  }

  // removeQuestion(question){
  //   this.questions = this.questions.filter(q => {
  //     console.log(question)
  //     console.log(q)
  //     return q != question
  //   })
  //   console.log(this.questions)
  // }

  removeQuestion(question){
    for(let i=0; i< this.questions.length ; i++){
      if(question == this.questions[i]){
        this.questions.splice(i,1)
        localStorage.setItem('questions',JSON.stringify(this.questions))
      }
    }
  }
}
