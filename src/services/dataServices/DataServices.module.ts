import { Module } from "@nestjs/common";
import { InMemoryDataServiceModule } from "src/infrastructure/dataServices/inMemory/inMemory.dataService.module";

@Module({
    imports: [InMemoryDataServiceModule],
    exports: [InMemoryDataServiceModule]
})
export class DataServiceModule { }