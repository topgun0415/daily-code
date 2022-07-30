public class Fibonacci2 {
  public static void main(String[] args) {

    // Solve Fibonacci equation and print out 0 1 1 2 3 5 8 13 21 34 
  
    int num1 = 0;
    int num2 = 1;
    int result = 0;

    for(int i = 0; i <= 10; i++) {
      
      num1 = result;
      System.out.print(result + " ");
      result = num1 + num2;
      num2 = num1;

    }

  }
}
