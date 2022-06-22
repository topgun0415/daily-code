public class media_java {
  public static void main(String[] args) {
     
    // first question 
    int[][] score = {
      { 21, 34, 56, 52, 95, 61},
      { 15, 81, 72, 44, 32},
      { 75, 91, 88, 22, 30}
    };

    for(int i = 0; i < score.length; i++) {
      for(int j = 0; j < score[i].length; j++) {
        System.out.println(score[i][j]);
      }
    }

    // second question
    // for(int i = 0; i < 10; i++) {
    //   for(int j = 0; j < i * i; j++) {
    //     System.out.print('*');
    //   }
    //   System.out.println(" ");
    // }

    // int i = 0; 
    // String star = "*";
    // while(i < 10) {
    //   System.out.print(star.repeat(i * i));
    //   System.out.println(" ");
    //   i++;
    // }

    int i = 0;
    while(i < 10) {
      int j = i * i;
      while(j > 0) {
        System.out.print("*");
        j--;
      }
      System.out.println(" ");
      i++;
    }
  }
}
