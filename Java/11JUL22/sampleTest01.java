/**
 * media_java
 */
public class sampleTest01 {
    public static void main(String[] args) {

        int[] weight = {10, 20, 30, 40, 50, 60, 70, 80, 90, 100};
        int[] price = {30, 55, 70, 90, 110, 130, 150, 160, 170, 200};
        
        int input = Integer.parseInt(args[0]);
        int length = 0;
        
        for(int i = 0; i < weight.length; i++) {
            if(input == weight[i]) {
                length = i;
            }
        }

        if(input > 100) {
            System.out.println("You are not allow to send over 100kg");
        } else {
            System.out.println("Weight :" + input + "Price :" + price[length]);
        }
    }  
}
