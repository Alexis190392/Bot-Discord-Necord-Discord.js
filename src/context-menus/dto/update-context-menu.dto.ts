import { PartialType } from '@nestjs/mapped-types';
import { CreateContextMenuDto } from './create-context-menu.dto';

export class UpdateContextMenuDto extends PartialType(CreateContextMenuDto) {}
