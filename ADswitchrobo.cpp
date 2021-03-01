#include <iostream>

using namespace std;

void calc(float a, float b, char c){
    if(c == '*')
    {
        cout << (a * b);
    }else if(c == '/')
    {
        cout << (a/b);
    }
    else if(c == '-'){
        cout << (a-b);
    }
    else if(c == '+'){
        cout << (a+b);
    }
}

int main(){

    char op;
    cin >> op;

    // switch (op)
    // {
    // case 1:
    //     cout << "Hello";
    //     break;
    // case 2:
    //     cout << "Hola";
    //     break;
    // case 3:
    //     cout << "Cioas";
    //     break;
    // case 4:
    //     cout << "namaste";
    //     break;
    // default:
    //     cout << "I am still learning.";
    //     break;
    // }
    float a,b;
    cin >> a >> b;
    cout << "a : " << a << " b : " << b << endl;
    switch (op)
    {
    case '*':
        calc(a,b,'*');
        break;

    case '/':
        calc(a,b,'/');
        break;

    case '+':
        calc(a,b,'+');
        break;

    case '-':
        calc(a,b,'-');
        break;

    default:
        cout << "Still learning";
        break;
        
    }

    return 0;
}