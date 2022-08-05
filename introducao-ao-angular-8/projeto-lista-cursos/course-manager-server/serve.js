const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

var currentUser;

var corsOptions = {
  orgim: '/',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.listen(3100, () => {
  console.log('Server Started!');
});

app.route('/api/courses').get((request, response) => {
  response.send(COURSES);
});

app.route('/api/courses').post((request, response) => {
  let course = request.body;

  const firstId = COURSES ? Math.max.apply(null, COURSES.map(courseIterator => courseIterator.id)) + 1 : 1;
  course.id = firstId;
  COURSES.push(course);
  

  response.status(201).send(course);
});

app.route('/api/courses/:id').put((request, response) => {
  const courseId = +request.params['id'];
  const course = request.body;

  const index = COURSES.findIndex(courseIterator => courseIterator.id === courseId);
  COURSES[index] = course;

  response.status(200).send(course);
});

app.route('/api/courses/:id').get((request, response) => {
  const courseId = +request.params['id'];

  response.status(200).send(COURSES.find(courseIterator => courseIterator.id === courseId));
});

app.route('/api/courses/:id').delete((request, response)=> {
  const courseId = +request.params['id'];
  COURSES = COURSES.filter(courseIterator => courseIterator.id !== courseId);
  
  response.status(204).send({});
});

var COURSES = [
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
