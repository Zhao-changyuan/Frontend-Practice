/** 
语法定义也叫语法产生式
<Expression> ::=
    <AdditiveExpression><EOF>

<AdditiveExpression> ::=
    <MUltiplicativeExpression>
    |<AdditiveExpression><+><Number>
    |<AdditiveExpression><-><Number>

<MUltiplicativeExpression> ::=
    <Number>
    |<MUltiplicativeExpression><*><Number>
    |<MUltiplicativeExpression></><Number>

语法分析：LL
LL 语法分析根据每一个产生式来写一个函数。
*/

// 词法分析，状态机
// 用函数表示状态，用if表示状态的迁移关系，用return值表示下一个状态。
var token = [];
const start = char => {
    if (char === '1'
        || char === '2'
        || char === '3'
        || char === '4'
        || char === '5'
        || char === '6'
        || char === '7'
        || char === '8'
        || char === '9'
        || char === '0'
    ) {
        token.push(char);
        return inNumber;
    }

    if (char === '*'
        || char === '/'
        || char === '+'
        || char === '-'
    ) {
        emmitToken(char, char);
        return start;
    }

    if (char === ' ') {
        return start;
    }

    if (char === '\r' || char === '\n') {
        return start;
    }
};

const inNumber = char => {
    if (char === '1'
        || char === '2'
        || char === '3'
        || char === '4'
        || char === '5'
        || char === '6'
        || char === '7'
        || char === '8'
        || char === '9'
        || char === '0'
    ) {
        token.push(char);
        return inNumber;
    } else {
        emmitToken("Number", token.join(""));
        token = [];
        return start(char);
    }
};

function emmitToken(type, value) {
    console.log(value);
}

/* var input = "1024 + 2 * 256";
var state = start;
for(var c of input.split('')) {
    state = state(c);
}
state(Symbol('EOF')); */