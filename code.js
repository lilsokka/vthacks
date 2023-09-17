printSnippetOne = [
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
    'this is just a test',
    'testing 1',
    'testing 2',
    '1234',
    '56789',
    'testing 5',
    'testing 6',
    'testing 7',
]
const typeSnippets = [
    typeSnippetOne , typeSnippetTwo
];
const codeSnippets = [
    printSnippetOne
];