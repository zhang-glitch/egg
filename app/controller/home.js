'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
<<<<<<< HEAD

=======
>>>>>>> branch1
  async login() {
    const { ctx } = this;
    ctx.body = 'hi, login';
  }
<<<<<<< HEAD
=======
  async user() {
    const { ctx } = this;
    ctx.body = 'hi, user';
  }
>>>>>>> branch1
}

module.exports = HomeController;
