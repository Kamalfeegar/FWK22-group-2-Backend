/**
@group unit
**/
require('dotenv').config();
const request = require('supertest');
const { app } = require('../server');
const data = require( '../data.json')
const controllers = require("../controllers/blog_controller");


// Test if Jest is working
describe('Test jest', () => {
    it('1 = 1', () => {
      expect(1).toBe(1);
    });
});

// Test if the dummy data has all neded Propertys
describe('That data has properties', () => {
  it('Title, Description, Date and ID ', () => {
    data.forEach(article => {
      expect(article).toHaveProperty('title');
      expect(article).toHaveProperty('description');
      expect(article).toHaveProperty('date');
      expect(article).toHaveProperty('id');
    });
  });
});

describe('Following data properties are not empty:', () => {
  it('Title, Description, Date and ID ', () => {
    data.forEach(article => {
      expect(article.title).not.toBe('');
      expect(article.description).not.toBe('');
      expect(article.date).not.toBe('');
      expect(article.id).not.toBe('');
    });
  });
});


/* 

describe('drinkAll', () => {
  test('drinks something lemon-flavoured', () => {
    const drink = jest.fn();
    drinkAll(drink, 'lemon');
    expect(drink).toHaveBeenCalled();
  });


  */