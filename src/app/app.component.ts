import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDoModel } from './Model/to-do';
import { FormsModule, NgForm } from '@angular/forms';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'crud';
  toDoList:ToDoModel[]=[];
  editMode:boolean=false;
  toDo : ToDoModel={
    addTodo:""
  }
  editToDo: ToDoModel ={
     addTodo:""
  }

  constructor(private toDOService : TodoService){}

  

  ngOnInit():void{
    this.getTodo();
  }

  getTodo(){
    this.toDOService.getTodo().subscribe((res)=>{
      console.log(res);
      this.toDoList=res;
    })
  }

  onSubmit(form:NgForm):void{
    console.log(form);
   if(this.editMode){
    this.toDOService.updateTodo(this.toDo).subscribe((res)=>{
      this.onResetForm();
      this.getTodo();
      this.editMode=false;
    })
   }
   else{
    this.toDOService.addTodo(this.toDo).subscribe((res)=>{
      this.onResetForm();
      this.getTodo();
      console.log("hellow")
    })
   }
  }

  onEdit(toDoData:ToDoModel){
    // this.toDo=toDoData;
    this.toDo={...toDoData};   //this is true way
    this.editMode=true;
  }

  onDelete(id:any){
    console.log('id'+id);
    const isConfirm=confirm('Are you sure want to delete this is uese ?');
       if(isConfirm){
  this.toDOService.deleteTodo(id).subscribe((res)=>{
    this.getTodo();
  })
}
  }
  onResetForm(){
    this.toDo.addTodo="";
  }
}
