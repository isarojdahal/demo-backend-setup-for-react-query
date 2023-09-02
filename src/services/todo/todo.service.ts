import { Like } from "typeorm";
import AppDataSource from "../../config/database.config";
import TodoEntity from "../../entities/todo/todo.entity";

class TodoService {
  constructor(
    private readonly todoRepository = AppDataSource.getRepository(TodoEntity)
  ) {}

  async addTodo(data: string) {
    const todo = new TodoEntity();

    if (!data) throw new Error("Please provide data for Todo");
    todo.data = data;

    return await this.todoRepository.save(todo);
  }

  async getAll() {
    return await this.todoRepository.find({ order: { created_at: "DESC" } });
  }

  async searchTodo(q: string) {
    return await this.todoRepository.find({
      order: { created_at: "DESC" },
      where: {
        data: Like(`%${q}%`),
      },
    });
  }
}

export default TodoService;
