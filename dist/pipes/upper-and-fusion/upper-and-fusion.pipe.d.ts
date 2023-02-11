import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class UpperAndFusionPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
