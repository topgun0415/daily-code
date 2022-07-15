public class NaTest {
  public static void main(String[] args) {
    
    // 문제 : 1부터 50까지 숫자를 나타내어라. 단 3의 배수 혹은 3이 들어간 숫자 뒤에는 !를 넣는다. 그리고 5의 배수에는 ?를 같이 출력한다. 
    //       위의 두 조건을 만족할 시에는 !?를 같이 출력하라. 

    for(int i = 1; i <= 50; i++) {
      System.out.print(i);

      if(i % 3 == 0 || i % 10 == 3 || i / 10 == 3) {
        System.out.print("!");
      }

      if(i % 5 == 0) {
        System.out.print("?");
      }

      System.out.println("");
    }
  }
}
