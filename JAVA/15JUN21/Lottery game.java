import java.lang.reflect.Array;
import java.util.*;
public class originJava30 {

	public static void main(String[] args) {
    
    // Making Lottery game
		
		int [ ] ball = new int [45];
		
		for (int i= 0; i < ball.length; i++)
		{
		   ball[i] = i + 1;
		}
		   System.out.println(Arrays.toString(ball));
		   
		   
		   int tmp = 0;
		   int j = 0;
		   
		 for (int i = 0; i < 7; i++)
		 {
			 j = (int)(Math.random()*46);
			 tmp = ball[i];
			 ball[i] = ball[j];
			 ball[j] = tmp;
			 System.out.println(Arrays.toString(ball));
			 System.out.println();
//			 System.out.printf("Ball[%d] =%d%n", i, ball[i]);
		 }
	    
	
		System.out.println("Ball[0] = " + ball[0]);
		System.out.println("Ball[1] = " + ball[1]);
		System.out.println("Ball[2] = " + ball[2]);
		System.out.println("Ball[3] = " + ball[3]);
		System.out.println("Ball[4] = " + ball[4]);
		System.out.println("Ball[5] = " + ball[5]);
		System.out.println("Ball[6] = " + ball[6]);

	}
	
 }
