import Nav from './../blocks/header';
import './../../css/page/index.sss';


let nav = document.getElementById('nav');
let data = [
  {
    title: 'Index',
    link: 'index.html'
  },
  {
    title: 'Blog',
    link: 'blog.html'
  }
];

new Nav(data, nav);