import { Module } from "@nestjs/common";
import { DataService } from "src/core/abstracts";
import { InMemoryDataService } from "./in-memory.dataService.service";

@Module({
    providers: [
        {
            provide: DataService,
            useClass: InMemoryDataService
        }
    ],
    exports: [DataService]
})
export class InMemoryDataServiceModule { }