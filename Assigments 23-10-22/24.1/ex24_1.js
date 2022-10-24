function Square(a, b, c, d){
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    }

    const newSQ = new Square (1,1,1,1);
    console.log(newSQ);

    Square.prototype.isSquare = () => {
        if ((this.a == this.b) &&  (this.b == this.c) && (this.c == this.d)) {
            console.log('true');
        } 
        else {
            console.log('false');
    
        }
    }

    newSQ.isSquare();