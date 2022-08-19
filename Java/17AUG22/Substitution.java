public class Substitution {
  public static void main(String[] args) {

      String value = "hollo";
      String target = "o";
      String change = "!!";
      String result = "";

      
      for(int i = 0; i < value.length(); i++) {
        if(target.equals(String.valueOf(value.charAt(i)))) {
          result = value.substring(0, i) + change + value.substring(i + 1);
          value = result;
        }
      }

      System.out.println(result);

      int[] arr = {2, 1, 6, 10, 8, 9};
      int highest = arr[0];
      int lowest = arr[0];
      
      for(int i = 0; i < arr.length; i++) {

        if(highest < arr[i]) {
          highest = arr[i];
        } 

        if(lowest > arr[i]) {
          lowest = arr[i];
        }
      }

      System.out.println("最大は" + highest + "です。");
      System.out.println("最小は" + lowest + "です。");
   }
}