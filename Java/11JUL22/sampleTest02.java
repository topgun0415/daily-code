public class sampleTest02 {
  public static void main(String[] args) {
      
      int[][] score = {
        {56, 72, 43, 97, 62, 32},
        {45, 25, 65, 78, 82},
        {32, 49, 74, 78, 88},
      };

      print(score);
  }

  static void print(int[][] score) {
    for(int i = 0; i < score.length; i++) {
      for(int j = 0; j < score[i].length; j++) {
        System.out.println((i + 1) + "grade " + (j + 1) + "class : " + score[i][j]);
      }
    }
  }
}
