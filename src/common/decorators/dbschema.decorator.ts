import { applyDecorators, SetMetadata } from "@nestjs/common";
import { Schema } from "@nestjs/mongoose";

export const DbSchema = (...args: string[]) => {
  return applyDecorators(
    SetMetadata("dbschema", args),
    Schema({
      toJSON: {
        versionKey: false,
        transform(_, ret) {
          ret.id = ret._id;
          delete ret._id;
        }
      }
    })
  );
};
