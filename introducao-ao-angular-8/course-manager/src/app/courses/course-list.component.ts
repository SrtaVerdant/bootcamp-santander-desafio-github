import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit{

    courses: Course[] = [];

    ngOnInit(): void{
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '/assets/images/forms.png',
                preco: 99.99,
                code: 'XPS-8743',
                duracao: 120,
                avaliacao: 4.5,
                dataLancamento: 'Dezembro, 2, 2019'
            },
            {
                id: 2,
                name: 'Angular: HTTP',
                imageUrl: '/assets/images/http.png',
                preco: 45.99,
                code: 'LKL-8743',
                duracao: 80,
                avaliacao: 5,
                dataLancamento: 'Novembro, 2, 2019'
            }
        ]
    }
}