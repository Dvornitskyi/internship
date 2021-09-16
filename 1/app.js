let mas = [1, 2, 1];
function resMas(){
    let a = mas[0], b = mas[1], c = mas[2], x = 0, x1 = 0, x2 = 0;
    let D = b*b - 4*a*c;
    let aString = bString = cString = "";
    if(a == 1){
        aString = ""+a;
    }
    if(b == 1){
        bString = "+ ";
    }
    if(a == -1){
        aString = "- ";
    }
    if(b == -1){
        bString = "- ";
    }
    if(a > 0 && a !=1 ){
        aString = ""+a;
    }
    if(b > 0 && b !=1){
        bString = "+ "+b;
    }
    if(c > 0){
        cString = "+ "+c;
    }
    if(a < 0 && a !=-1){
        aString = "- "+(-a);
    }
    if(b < 0 && b !=-1){
        bString = "- "+(-b);
    }
    if(c < 0){
        cString = "- "+(-c);
    }
    if(a == 0 && b == 0 && c ==0){
        console.log("Ужас так не делай");
    }
    if(a == 0 && b == 0 && c !=0){
        console.log("Ужас так не делай");
    }
    if(a == 0 && b != 0 && c ==0){
        console.log("Ужас так не делай");
    }
    if(a == 0 && b != 0 && c !=0){
        x = c/b;
        console.log("Уравнение: ", bString, "x", cString, " = 0");
        console.log("x = ", x);
    }
    if(a != 0){
        if(b != 0 && c != 0){
            console.log("Уравнение: ", aString, "x^2", bString, "x", cString, " = 0");
            if(D < 0){
                console.log("Ужас Дискриминант < 0");
            }
            if(D > 0){
                x1 = (-b + Math.sqrt(D)) / (2 * a);
                x2 = (-b - Math.sqrt(D)) / (2 * a);
                console.log("Дискриминант = ", D);
                console.log("Корни: x1 = ", x1, "; x2 = ", x2);
            }
            if(D == 0){
                x = (-b+Math.sqrt(D))/(2*a);
                console.log("Дискриминант = ", D);
                console.log("Корни: x1 = x2 = ",x);
            }
        }
        if(b == 0 && c != 0 ){
            console.log("Уравнение: ", aString, "x^2", cString, " = 0");
            if(((-c)/a) >= 0){
                x1 = Math.sqrt(-(c/a));
                x2 = x1*(-1);
                console.log("Корни: x1 = ", x1, "; x2 = ", x2);
            }
            if(((-c)/a) < 0){
                console.log("Ужас корней нет");
            }
        }
        if(b != 0 && c == 0 ){
            console.log("Уравнение: ", aString, "x^2", bString, "x", " = 0");
            console.log("Корни: x1 = 0, x2 =", (-(b/a)));
        }
    }
 }
resMas();