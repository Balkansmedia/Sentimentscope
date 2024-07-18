export class AnalyticCard{
    title: string;
    value: number;
    icon: string;
    description: string;
    color: string;
    constructor(title: string, value: number, icon: string, description: string, color:string){
        this.title = title;
        this.value = value;
        this.icon = icon;
        this.description = description;
        this.color = color;
    }
}