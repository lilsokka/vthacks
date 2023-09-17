printSnippetOne = [
    'A java Factorial Calculator',
    'import java.util.Scanner;', 
    '    public class FactorialCalculator {',
    '        public static void main(String[] args) {',
    '            Scanner input = new Scanner(System.in);',
    '        System.out.print("Enter a non-negative integer: ");',
    '        int n = input.nextInt();',
    '',
    '       if (n < 0) {',
    '            System.out.println("Factorial is undefined for negative numbers.");',
    '        } else {',
    '            long factorial = calculateFactorial(n);',
    '            System.out.println("Factorial of " + n + " is " + factorial);',
    '        }',
    '',
    '        input.close();',
    '    }',
    '',
    '    public static long calculateFactorial(int n) {',
    '        if (n == 0 || n == 1) {',
    '            return 1;',
    '        } else {',
    '            return n * calculateFactorial(n - 1);',
    '        }',
    '    }',
    '}'
];
typeSnippetOne = [
    'import java.util.Scanner;', 
    'public class FactorialCalculator {',
    'public static void main(String[] args) {',
    'Scanner input = new Scanner(System.in);',
    'System.out.print("Enter a non-negative integer: ");',
    'int n = input.nextInt();',
    'if (n < 0) {',
    'System.out.println("Factorial is undefined for negative numbers.");',
    '} else {',
    'long factorial = calculateFactorial(n);',
    'System.out.println("Factorial of " + n + " is " + factorial);',
    '}',
    'input.close();',
    '}',
    'public static long calculateFactorial(int n) {',
    'if (n == 0 || n == 1) {',
    'return 1;',
    '} else {',
    'return n * calculateFactorial(n - 1);',
    '}',
    '}',
    '}'
];
typeSnippetTwo = [
    'public class HelloWorld {',
    'public static void main(String[] args) {',
    'System.out.println("Hello, World!");',
    '}',
    '}',
]
printSnippetTwo = [
    'Basic print statement in Java!',
'    public class HelloWorld {',
'        public static void main(String[] args) {',
'            System.out.println("Hello, World!");',
'        }',
'    }'
]
typeSnippetThree = [
    'function greetUser(name) {',
    'console.log("Hello, " + name + "!");',
    '}',
    'greetUser("Alice");'
]
printSnippetThree = [
    'Basic print statemtn in Javascript!',
'    function greetUser(name) {',
'        console.log("Hello, " + name + "!");',
'    }',
'    ',
'    greetUser("Alice");'
]
typeSnippetFour = [
    'def greet_user(name):',
    'print("Hello, " + name + "!")',
    'greet_user("Bob")'
]
printSnippetFour = [
    'Basic print statement in Python',
    'def greet_user(name):',
    'print("Hello, " + name + "!")',
    '',
    'greet_user("Bob")'
]
typeSnippetFive = [
'import java.util.Random;',
'public class RandomNumberGenerator {',
'public static void main(String[] args) {',
'Random random = new Random();',
'int randomNumber = random.nextInt(100) + 1;',
'System.out.println("Random Number: " + randomNumber);',
'}',
'}'
]
printSnippetFive = [
    'Random Number Generator in Java!',
    'import java.util.Random;',
    '',
    'public class RandomNumberGenerator {',
    '    public static void main(String[] args) {',
    '        Random random = new Random();',
    '',
    '        int randomNumber = random.nextInt(100) + 1;',
    '        System.out.println("Random Number: " + randomNumber);',
    '    }',
    '}'
]
const typeSnippets = [
    typeSnippetOne , typeSnippetTwo, typeSnippetThree, typeSnippetFour, typeSnippetFive
];
const codeSnippets = [
    printSnippetOne, printSnippetTwo, printSnippetThree, printSnippetFour,  printSnippetFive
];