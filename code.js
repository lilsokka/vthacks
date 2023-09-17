printSnippetOne = [
    '//A java Factorial Calculator',
    'import java.util.Scanner;', 
    '//This allows a program to get user input by accessing an avalible library',
    '    public class FactorialCalculator {',
    '   //this declares your class name and makes it a public class',
    '        public static void main(String[] args) {',
    '       //this is the standard main method header for all java programs.',
    '            Scanner input = new Scanner(System.in);',
    '        System.out.print("Enter a non-negative integer: ");',
    '        int n = input.nextInt();',
    '       //The above code declares a scanner object and gets an integer input from a user. If you do not account for user error, this could end up crashing the program if the user inputs a string.',
    '       if (n < 0) {',
    '            System.out.println("Factorial is undefined for negative numbers.");',
    '        } else {',
    '            long factorial = calculateFactorial(n);',
    '            System.out.println("Factorial of " + n + " is " + factorial);',
    '        }',
    '',
    '        input.close();',
    '    }',
    '   //This method is an example of how people break up tasks in compsci. One of the major ideas of Java is using smaller methods to solve bigger problems',
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
    '//Basic print statement in Java!',
'    public class HelloWorld {',
'        public static void main(String[] args) {',
'            //Java has a weirdly complex print statement. Other than that you can see the coder declaring the class and main methods in this program.',
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
    '//Basic print statemtn in Javascript!',
'    function greetUser(name) {',
'        console.log("Hello, " + name + "!");',
'    }',
'    //Unlike Java, Javascript does not require an explicit main method, but you can still see the basis of object oriented design with the use of a method.',
'    greetUser("Alice");'
]
typeSnippetFour = [
    'def greet_user(name):',
    'print("Hello, " + name + "!")',
    'greet_user("Bob")'
]
printSnippetFour = [
    '#Basic print statement in Python',
    'def greet_user(name):',
    'print("Hello, " + name + "!")',
    '#Very similar to Javascript. Notice the difference in syntax, but you can still see the basic method outline. It also includes an "argument," a variable you can pass into your methods from outside.',
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
    '//Random Number Generator in Java!',
    'import java.util.Random;',
    '//Notice the use of the imported random library to help make this code much more easily.',
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