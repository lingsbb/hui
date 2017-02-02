import { Pagination } from '../../common/entity/pagination';

export class PaginationBase {
    p:Pagination;
    heroes:any;

    constructor() { 
        let aa:Pagination=new Pagination();
        aa.page_left='显示 1 到 2 ，共 3 条';
        aa.page_right=1;
        aa.rows=5;
        aa.p1=1;
        aa.p2=aa.rows;
        this.p=aa;
    }

    next():void{
        if (this.p.page_right<this.p.page_all){
            this.p.page_right++;
            this.page_calc();
            this.getList();
        }
        // let a=$('#DataTables_Table_0_next').html();
        // alert("删除成功"+a);
    }

    pre():void{
        if (this.p.page_right>1){
            this.p.page_right--;
            this.page_calc();
            this.getList();
        }        
    }

    getList(): void {
    }

    page_calc():void{
        this.p.p1=(this.p.page_right-1)*this.p.rows+1;
        this.p.p2=this.p.p1+this.p.rows-1;
        // alert(this.p2);
        if (this.p.p2>this.heroes[0].rows){
            this.p.p2=this.heroes[0].rows;
        }
        // alert(this.p2);
        this.p.page_left='显示 '+this.p.p1+' 到 '+this.p.p2+' ，共 '+this.heroes[0].rows+' 条';
    }

    new_page_all():void{
        this.p.page_all= this.heroes[0].rows / this.p.rows;
        this.p.page_all= Math.round(this.p.page_all);
        this.page_calc();
    }

}