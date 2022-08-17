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
   }
}