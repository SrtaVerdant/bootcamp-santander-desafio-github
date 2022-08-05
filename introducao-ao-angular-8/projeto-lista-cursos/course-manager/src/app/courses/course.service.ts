import { Course } from './course';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
    providedIn: 'root' 
})
export class CourseService { 

    private coursesUrl: string = 'http://localhost:3100/api/courses'

    constructor(private httpClient: HttpClient){

    }

    retrieveALL(): Observable<Course[]> {
        return this.httpClient.get<Course[]>(this.coursesUrl);
    }

    retrieveById(id: number): Observable<Course>{
        return this.httpClient.get<Course>(`${this.coursesUrl}/${id}`);
    }

    save(course: Course): Observable<Course>{
        if (course.id) {
            return this.httpClient.put<Course>(`${this.coursesUrl}/${course.id}`, course)
        }else{
            return this.httpClient.put<Course>(`${this.coursesUrl}`, course)
        }
    }

    deleteById(id: number): Observable<any>{
        return this.httpClient.delete<any>(`${this.coursesUrl}/${id}`);
    }

    // private coursesUrl: string = 'http://localhost:3100/api/courses';

    // constructor(private httpClient: HttpClient) { }

    // retrieveAll(): Observable<Course[]> {
    //     return this.httpClient.get<Course[]>(this.coursesUrl);
    // }

    // retrieveById(id: number): Observable<Course> { 
    //     return this.httpClient.get<Course>(`${this.coursesUrl}/${id}`);
    // }

    // save(course: Course): Observable<Course> { 
    //     if(course.id) { 
    //         return this.httpClient.put<Course>(`${this.coursesUrl}/${course.id}`, course);
    //     } else { 
    //         return this.httpClient.post<Course>(`${this.coursesUrl}`, course);
    //     }
    // }

    // deleteById(id: number): Observable<any> {
    //     return this.httpClient.delete<any>(`${this.coursesUrl}/${id}`);
    // }

}

var COURSES: Course[] = [
    {
        id: 1,
        name: 'Angular: CLI',
        dataLancamento: 'November 2, 2019',
        descricao: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
        duracao: 120,
        code: 'XLF-1212',
        avaliacao: 3,
        preco: 12.99,
        imageUrl: '/assets/images/cli.png',
    },
    {
        id: 2,
        name: 'Angular: Forms',
        dataLancamento: 'November 4, 2019',
        descricao: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Forms.',
        duracao: 80,
        code: 'DWQ-3412',
        avaliacao: 3.5,
        preco: 24.99,
        imageUrl: '/assets/images/forms.png',
    },
    {
        id: 3,
        name: 'Angular: HTTP',
        dataLancamento: 'November 8, 2019',
        descricao: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de HTTP.',
        duracao: 80,
        code: 'QPL-0913',
        avaliacao: 4.0,
        preco: 36.99,
        imageUrl: '/assets/images/http.png',
    },
    {
        id: 4,
        name: 'Angular: Router',
        dataLancamento: 'November 16, 2019',
        descricao: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Router.',
        duracao: 80,
        code: 'OHP-1095',
        avaliacao: 4.5,
        preco: 46.99,
        imageUrl: '/assets/images/router.png',
    },
    {
        id: 5,
        name: 'Angular: Animations',
        dataLancamento: 'November 25, 2019',
        descricao: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis sobre Animation.',
        duracao: 80,
        code: 'PWY-9381',
        avaliacao: 5,
        preco: 56.99,
        imageUrl: '/assets/images/animations.png',
    }
];