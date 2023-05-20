import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  constructor(private supply: PowerService){}
  computer(a: number, b: number){
    const res =this.supply.getPowerSupply(90);
    console.log(res);
    return a + b ;
  }
}
