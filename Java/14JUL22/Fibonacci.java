public class Fibonacci {
  public static void main(String[] args) {
      
      // int num1 = Integer.parseInt(args[0]);
      // int num2 = Integer.parseInt(args[1]);
      // 커맨드라인 통해서 값을 넣는 방식이지만 vscode에서는 불가능하기에 그냥 값을 바로 넣어서 할 예정

      int num1 = 1;
      int num2 = 1;
      int result = 0;

      for(int i =1; i <= 10; i++) {
        result = num1 + num2;
        System.out.print(result + " ");
        num2 = num1;
        num1 = result;      
      }

      // 출력값 : 2 3 5 8 13 21 34 55 89 144 

  }
}
