import { TopPageModel } from './top-page.model';
import { FindTopPageDto } from './dto/find-top-pageDto';
import { ConfigService } from '@nestjs/config';
export declare class TopPageController {
    private readonly configService;
    constructor(configService: ConfigService);
    create(dto: Omit<TopPageModel, '_id'>): Promise<void>;
    get(id: string): Promise<void>;
    delete(id: string): Promise<void>;
    patch(id: string, dto: TopPageModel): Promise<void>;
    find(dto: FindTopPageDto): Promise<void>;
}
