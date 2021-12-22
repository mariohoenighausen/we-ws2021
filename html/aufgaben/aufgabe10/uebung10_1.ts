class Test {
    private static x: number;

    constructor() {
        Test.x = 2;
    }

    isEven(): boolean {
        return Test.x % 2 == 0
    }

    static isEvenStatic(): boolean {
        return Test.x % 2 == 0;
    }
}

// This task actually referred to inner static classes
// inner class is usable before outer class instantiation Java and C#
// static for inner classes is not necessary in TypeScript/JavaScript
// object literals/instances mimic the preliminary definition of a class
// https://www.typescriptlang.org/docs/handbook/2/classes.html#why-no-static-classes