import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TodoModule } from "src/todo";

@Module({
  imports: [TodoModule, MongooseModule.forRoot("mongodb://localhost")]
})
export class AppModule {}
