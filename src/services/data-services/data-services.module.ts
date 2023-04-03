import { Module } from "@nestjs/common";
import { InMemoryDataServiceModule } from "src/infrastructure/data-services/in-memory/in-memory.dataService.module";

@Module({
    imports: [InMemoryDataServiceModule],
    exports: [InMemoryDataServiceModule]
})
export class DataServiceModule { }