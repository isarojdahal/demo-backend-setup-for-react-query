import { IsString } from "class-validator";

export default class TodoDTO {
  @IsString()
  data: string;
}
