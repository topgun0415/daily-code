import java.util.*;
public class originJava30 {

	public static void main(String[] args) {
		
	Loop1 : for (int i = 2; i <= 9; i++)
	{
		for (int j = 1; j<= 9; j++)
		{
			
			if (j == 4)
			break Loop1;
//			   continue;
//				break;
//				continue Loop1;
			System.out.printf("%d * %d = %d%n", i , j, (i*j) );
		
		} //for문 줄
		
			System.out.println();
	} // Loop1 줄
		
		
		
     }
	
}
