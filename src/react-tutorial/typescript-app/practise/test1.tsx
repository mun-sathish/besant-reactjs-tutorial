
const main = () => {
    // number, boolean, string, undefined, null, void, customTypes, any
    // let a: number = 10;
    // a = 1;

    // let bVar: boolean = false;

    // let sVar: string = "string";
    let output: number = addFn(1, 2);

    let data: any[] = [1,2,"asdasd", true];
    let data1: Array<any> = [1,2,"asdasd", true];
    let customArr: [number, string] = [12, "sdfwer"];
    

    // destructing = spread operators
    let dataCoy = [...data];


    // ENUM
    // alert(addFns(1,2,3,123,123,1231,12313))
    enum Color { RED, BLUE, GREEN }
    let btnColor: Color = Color.GREEN;
    let headerColor: Color = Color.RED;
    console.log(btnColor);
    console.log(headerColor);


    type customType = { name: string }
    let myData: customType = { name: "sadf" };
    let myData2: { name: string } = { name: "sadf" };


    let mixedVar: number | string | any  = "123";
    // type casted
    // (mixedVar as number).toExponential();
    // (<string> mixedVar).toExponential();


    // let sathishData: IMyInterface = {
    //     id: 123,
    //     name
    // }
    // getData().

    // Classes
    let tiger = new Animal("Tiger");
    // alert(tiger.data1);
    // tiger.data1 = "asd"
    // Animal.printData("printing")

    // getData().print("asd");
    let customData: ICustom<number> = {
        data: 123
    }
    alert(test<string>("Data"));
}

function test<T>(variable: T) : T {
    return variable;    
}

class Animal {
    readonly data1: string;
    public static pi: number = 3.14;

    constructor(data1: string) {
        this.data1 = data1;
    }

    public static printData(str: string) {
        alert(str);
    }

    public bark(): string {
        return "I don't know which animal I am...";
    }
}

class Tiger extends Animal {
    constructor(data1: string) {
        super(data1);
    }

    public bark(): string {
        return "bow bow " + super.bark();
    }
}


const getData = (): INewOne => {
    return {
        id: 12,
        name: "sathish",
        print: (data1) => alert(data1)
    }
}

interface IMyInterface  {
    id: number;
    name: string;
    ph?: number;
    print(param1: string): void;
}

interface INewOne extends IMyInterface {
    newData?: string
}

interface ICustom<T> {
    data: T
}


const addFn = (no1: number, no2: number): number => {
    return no1 + no2;
}

const addFns = (no1: number, ...nos: number[]): number => {
    return no1 + nos.reduce((prevVal, currVal) => prevVal + currVal);
}

export default main;