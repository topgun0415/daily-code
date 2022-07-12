public class specialNumber {
  public static void main(String[] args) {
    
    int inputNum = 50;

    for(int i = 1; i < inputNum; i++) {
      if(i % 3 == 0) {
        System.out.println(i + "!");
        continue;
      } else if(i % 5 == 0) {
        System.out.println(i + "?");
        continue;
      }
      System.out.println(i); 
    }
  }
}
