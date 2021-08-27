import { Component, OnInit } from '@angular/core';

// imports from question.ts
import { Question } from '../question';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  // all of the questions being asked in the quiz
  questions = [
    new Question('What is the command to create the local repository?',
      ['git init', 'git status', 'git push', 'git pull'],
      'git init'),
    new Question('Which type of data binding allows you to share data from the component to view?',
      ['interpolation', 'property binding', 'two way data binding', 'all of the above'],
      'all of the above'),
    new Question('What operator(s) in JavaScript compare(s) the content and the type both?',
      ['==', '===', 'typeof', 'All of the above'],
      '==='),
    new Question('What is Bootstrap related to?',
      ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
      'CSS'),
    new Question('What Bootstrap class styles a textbox inside the form?',
      ['alert alert-danger', 'form-check', 'form-control', 'form-style'],
      'form-control'),
    new Question('Which decribes Internal CSS best?',
      ['using the \'style\' attribute inside HTML elements', 'using a <style> element in the <head> section',
        'using a <link> element to link to an outside CSS file', 'none of the above'],
      'using a <style> element in the <head> section'),
    new Question('What do JSON files do?',
      ['edit JavaScript file', 'give Bootstrap its properties', 'store data', 'open JavaScript files'],
      'store data'),
    new Question('What pre-defined function in JavaScript converts a string to any number?',
      ['parseInt', 'parseFloat', 'eval', 'parseNumber'],
      'eval'),
    new Question('What does JSON.stringify() do?',
      ['converts JSON to string', 'converts string to JSON', 'converts any data type to JSON', 'converts JSON to any data type'],
      'converts JSON to string'),
    new Question('What method is used to access the element using the ID?',
      ['document.getElementTagById', 'document.getElementsById', 'document.getById', 'document.getElementById'],
      'document.getElementById'),
  ];

  currentQues = 0;
  currentScore = 0;
  currentAns: string = '';
  quizEnded: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  // if answer gets submitted, the user input answer will either be correct or incorrect
  submitAns() {
    if (this.currentAns == this.questions[this.currentQues].answer) {
      if (!this.questions[this.currentQues].answered)
        this.currentScore++;
    }
    this.questions[this.currentQues].answered = true;
  }

  // move on to the next question
  nextQuestion() {
    if (this.currentQues < this.questions.length - 1) {
      this.currentQues++;
    }
    else {
      this.quizEnded = true;
    }
  }
}