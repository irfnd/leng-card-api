import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
  
  // Get Server Info
  @Get()
  getHello() {
    return {
      "status": true,
      "message": "Welcome to Leng Card API.",
      "authors": ["irfnd"]
    }
  }
}