import { TransformFnParams } from 'class-transformer';

export function TransformToArrayOfNumbers({ value }: TransformFnParams) {
  if (Array.isArray(value)) {
    return value.map(Number);
  } else if (typeof value === 'string') {
    return value.split(',').map(Number);
  } else {
    return [Number(value)];
  }
}
