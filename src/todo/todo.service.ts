import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateTodoDto, UpdateTodoDto } from "src/common/dto";
import { Todo, TodoDocument } from "src/common/schemas";

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todoModal: Model<TodoDocument>) {}

  async getAll(): Promise<Todo[]> {
    return this.todoModal.find().exec();
  }

  async create(todoDto: CreateTodoDto): Promise<Todo> {
    const newTodo = new this.todoModal(todoDto);
    return newTodo.save();
  }

  async update(id: string, todoDto: UpdateTodoDto): Promise<Todo> {
    return this.todoModal.findByIdAndUpdate(id, todoDto, { new: true });
  }

  async remove(id: string): Promise<Todo> {
    return this.todoModal.findByIdAndRemove(id);
  }
}
