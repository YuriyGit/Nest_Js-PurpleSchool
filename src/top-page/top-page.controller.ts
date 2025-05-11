import { Body, Controller, Delete, Get, HttpCode, Inject, Param, Patch, Post } from '@nestjs/common';
import { TopPageModel } from './top-page.model';
import { FindTopPageDto } from './dto/find-top-pageDto';
import { ConfigService } from '@nestjs/config';

@Controller('top-page')
export class TopPageController {
	constructor(private readonly configService: ConfigService) {
	}

	@Post('create')
	async create(@Body() dto: Omit<TopPageModel, '_id'>) {

	}

	@Get(':id')
	async get(@Param('id') id: string) {
		this.configService.get("TEST")
	}

	@Delete()
	async delete(@Param('id') id: string) {}

	@Patch(':id')
	async patch(@Param('id') id: string, @Body() dto: TopPageModel) {}

	@HttpCode(200)
	@Post('find')
	async find(@Body() dto: FindTopPageDto) {}
}
