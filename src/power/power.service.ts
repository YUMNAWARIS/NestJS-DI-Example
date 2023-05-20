import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  getPowerSupply(watt: number){
    return `Supplying Power of ${watt}`
  }
}
