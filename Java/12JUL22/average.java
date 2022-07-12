public class average {
  public static void main(String[] args) {
    
    int[] arr = {25, 50, 75, 85, 90};
    int sum = 0;
    int average = 0;

    for(int i = 0; i < arr.length; i++) {
      sum += arr[i];
    }

    average = (sum / arr.length);

    System.out.println(average);

  }
}
