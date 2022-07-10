import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateTodoDto, UpdateTodoDto } from "src/common/dto";
import { Todo } from "src/common/schemas";
import { TodoService } from "./todo.service";

@Controller("todo")
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getAll(): Promise<Todo[]> {
    return this.todoService.getAll();
  }

  @Post()
  create(@Body() todoDto: CreateTodoDto): Promise<Todo> {
    return this.todoService.create(todoDto);
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() todoDto: UpdateTodoDto): Promise<Todo> {
    return this.todoService.update(id, todoDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string): Promise<Todo> {
    return this.todoService.remove(id);
  }
}
