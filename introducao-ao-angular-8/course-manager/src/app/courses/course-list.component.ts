import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit{

    filtrarCursos: Course[] = [];

    _courses: Course[] = [];

    
    _filtrarPor: string;

    constructor(private courseService: CourseService){

    }

    ngOnInit(): void{
       this._courses = this.courseService.retrieveALL();
       this.filtrarCursos = this._courses;
       
    }

    set filtrar(value: string){
        this._filtrarPor = value;

        this.filtrarCursos = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filtrarPor.toLocaleLowerCase()) > -1);
    }

    get filtrar() {
        return this._filtrarPor;
    }
}