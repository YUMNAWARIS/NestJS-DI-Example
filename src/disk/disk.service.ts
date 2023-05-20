import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private supply: PowerService) { }
  getData() {
    const res = this.supply.getPowerSupply(70);
    console.log(res); return 'Some Data on Disk..'
  }
}
