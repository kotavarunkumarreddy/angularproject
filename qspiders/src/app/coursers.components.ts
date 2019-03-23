import { Component } from "@angular/core";
import { DecimalPipe, NgSwitchDefault } from '@angular/common';

@Component({
selector:'coursers',
template:`
<button class="btn btn-success mt-2 mb-2" (click)="addEmp()">Add emp</button>
<ul class="list-group">
<li class="list-group-item mt-2" *ngFor="let x of language; index as i">
<span class="badge badge-info">{{i}}</span>
{{x}}
</li>
</ul>
<table class="table table-bordered">
<tr>
<th>id</th>
<th>name</th>
<th>age</th>
<th>salary</th>
<th>doj</th> 
</tr>
<tr *ngFor="let emp of employeeData">
<td>{{emp.id}}</td>
<td>{{emp.name}}</td>
<td>{{emp.age}}</td>
<td>{{emp.salary}}</td>
<td>{{emp.doj | date:'shortDate'}}</td>
<td (click)="removeEmp(emp)" class="btn btn-success mt-4 btn-sm">remove</td>
</table>
<div *ngIf="courses.length>0">
<h1>coureses are here</h1>
</div>
<div *ngIf="courses.length==0">
<h1>no coureses are here</h1>
</div>
<div *ngIf="courses.length > 0; then coursesList else nocourses"></div>
<ng-template #coursesList>
<h1>courese are here</h1>
</ng-template>

<ng-template #nocourses>
<h1>nocourese are here</h1>
</ng-template>
<div [ngSwitch]="color">
<p *ngSwitchCase="'red'">Red color is here</p>
<p *ngSwitchCase="'blue'">Red color is here</p>
<p *ngSwitchCase="'green'">Red color is here</p>
<p *ngSwitchDefault>no coloris here</p>
<button class="btn"[ngClass]="{'btn-success':isSelected,
'btn-danger':!isSelected
}">submit</button>
<div>
<p varun>hello</p>
<p>varun</p>
<p>varun</p>
</div>


`
})
export class coursersComponent{
    // isActive:boolean=true;
    // colSpan=6;
    isSelected=false;
    color=["block"];
    language=["kota","varun","kumar","reddy"];
    courses=["java","html","css","mongodg"]
    // Title:string="hello this is coursecomponent title";
    // onKeyUp($event){
    //     if($event.KeyCode===13){
    //         console.log('key was password',$event)
    //     }
    // }
    // clicked($event){
    //     console.log('button was clicked',$event);
    // }
    // onKeyUp(x){
    //     console.log(x);
    employeeData=
    [
        {
            id:14091,
            name: "kota varun",
            age:21,
            salary:20000,
            doj:new Date('5/4/2019')
    
        },
        {
            id:14091,
            name: "sunil",
            age:45,
            salary:10000,
            doj:new Date('5/4/2018')
    
        },

        {
            id:14091,
            name: "mohan",
            age:90,
            salary:2000,
            doj:new Date('5/4/2017')
    
        }
    ];
    addEmp(){
        this.employeeData.push({
            id:4,
            name:"DecimalPipe",
            age:93,
            salary:90000,
            doj:new Date('1/4/2019')
        })
    };
    removeEmp(emp){
        let index=this.employeeData.indexOf(emp);
        this.employeeData.splice(index,1);
    }
}

 