public class BubbleSort {
  public static void main(String[] args) {
    
    // 버블정렬 관련 알고리즘 공부

    String[] originalValue = {"10", "7", "3", "2", "4", "5", "9", "1"};
    int[] input = new int[originalValue.length];
    int tmp = 0;

    if(isNumber(args)) {
      for(int i = 0; i < input.length; i++) {
        input[i] = Integer.parseInt(originalValue[i]);
      }
  
      for(int i = 0; i < input.length; i++) {
        for(int j = 0; j < input.length; j++) {
          // > 내림차순 , < 오름차순 
          if(input[i] < input[j]) {
            tmp = input[i];
            input[i] = input[j];
            input[j] = tmp;
            tmp = 0;
          }
        }
      }

      for(int i = 0; i < input.length; i++) {
        System.out.print(input[i] + " ");
      }

    } else {
      System.out.println("Please type proper number");
    }
  }

  static boolean isNumber(String[] value) {
    
    try {
      for(int i = 0; i < value.length; i++) {
        double number = Double.parseDouble(value[i]);
      }
      return true;
    } catch(Exception e) {
      return false;
    }
  }
}

// 출력값 : 1 2 3 4 5 7 9 10 