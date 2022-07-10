import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { DbSchema } from "src/common/decorators";

export type TodoDocument = Todo & Document;

@DbSchema()
export class Todo {
  @Prop()
  id: string;

  @Prop()
  content: string;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
