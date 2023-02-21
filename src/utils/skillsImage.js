import html from '../assets/svg/skills/html.svg'
import css from '../assets/svg/skills/css.svg'
import angular from '../assets/svg/skills/angular.svg'
import javascript from '../assets/svg/skills/javascript.svg'
import nodeJS from '../assets/svg/skills/nodeJS.svg'
import react from '../assets/svg/skills/react.svg'
import typescript from '../assets/svg/skills/typescript.svg'
import bootstrap from '../assets/svg/skills/bootstrap.svg'
import mongoDB from '../assets/svg/skills/mongoDB.svg'
import git from '../assets/svg/skills/git.svg'
import graphql from '../assets/svg/skills/graphql.svg'
import materialui from '../assets/svg/skills/materialui.svg'
import knockout from '../assets/svg/skills/knockout.svg'
import jquery from '../assets/svg/skills/jquery.svg'
import express from '../assets/svg/skills/express.svg'
import jest from '../assets/svg/skills/jest.svg'
import jasmine from '../assets/svg/skills/jasmine.svg'
import sass from '../assets/svg/skills/sass.svg'



export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'html':
            return html;
        case 'css':
            return css;
        case 'angular':
            return angular;
        case 'javascript':
            return javascript;
        case 'knockout':
            return knockout;
        case 'jquery':
            return jquery;
        case 'express':
            return express;
        case 'sass':
            return sass;
        case 'jasmine':
            return jasmine;
        case 'jest':
            return jest;
        case 'node js':
            return nodeJS;
        case 'react':
            return react;
        case 'typescript':
            return typescript;
        case 'bootstrap':
            return bootstrap;
        case 'mongodb':
            return mongoDB;
        case 'git':
            return git;
        case 'graphql':
            return graphql;
        case 'materialui':
            return materialui;
        
        default:
            break;
    }
}
