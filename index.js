// Your code here
class Polygon {
    constructor(arrOI){
        this.arrOI = arrOI;
    };

    get countSides(){
        return this.arrOI.length;
    };

    get perimeter(){
        return this.arrOI.reduce((pValue, iValue) => pValue + iValue, 0);
    };
};

class Triangle extends Polygon{
    get isValid(){
        let A = this.arrOI[0];
        let B = this.arrOI[1];
        let C = this.arrOI[2];
        
        if(A + B > C || B + C > A || A + C > B){
            return true;
        };
    };
};

class Square extends Polygon{
    get isValid(){
        for(let i = 0; i < this.arrOI.length; i++){
            if (this.arrOI[i] === this.arrOI[0]) 
                { 
                    return true; 
                }
                else
                {
                    return false;
                }
        };
    };
    get area(){
        return this.arrOI[0] * this.arrOI[1];
    };
};