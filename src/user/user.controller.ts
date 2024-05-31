import { Controller, Get, Query } from "@nestjs/common";

@Controller("/api/user")
export class UserController {
  @Get()
  get(@Query("name") name: string) {
    return "Hello " + name;
  }
}
