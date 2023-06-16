import { MajorHeadChartResp } from "../firdetails/majorHeadChartResp";

export class MajorHeadDataEvent {
    state : string;
    dist : string;
    ps: string;
    majorHeadCode : number;
    category:number;
    majorHeadChartData : MajorHeadChartResp[]=[];
}