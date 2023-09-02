import TodoDTO from "../../dto/todo.dto";
import TodoService from "../../services/todo/todo.service";
import * as express from "express";
import { Body, Controller, Get, Post, Request, Route } from "tsoa";

@Route("todo")
export class TodoController extends Controller {
  constructor(private readonly todoService = new TodoService()) {
    super();
  }

  @Post("/")
  async addTodo(@Body() b: TodoDTO) {
    // const data = req.body as TodoDTO;
    try {
      const response = await this.todoService.addTodo(b.data);
      return { success: true, ...response };
    } catch (err: any) {
      throw new Error(err.toString());
    }
  }

  @Get("/")
  async getTodos(@Request() req: express.Request) {
    try {
      let response;
      if (req.query.q) {
        response = await this.todoService.searchTodo(req.query.q.toString());
      } else response = await this.todoService.getAll();
      return response;
    } catch (err: any) {
      throw new Error(err.toString());
    }
  }
}
