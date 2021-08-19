import java.util.*;
public class originJava30 {

	public static void main(String[] args) {
  
	  int [ ] [ ] number =    // int [ ] number = new int [4] 
		  { 
				  { 100, 200, 300 },
				  { 10, 10, 10 },
				  { 20, 20, 20 },
				  { 30, 30, 30 }

		  };
	  
	  int sum = 0;
	  
	  for (int i = 0; i < number.length; i++)
	  {
		  for (int j = 0; j < number[i].length; j++)
		  {
			  
			  System.out.printf("number [%d] , [%d] = %d%n" , i, j, number[i][j]);
			  
			  sum += number [i][j];
			 
		  }
		  
	  }

	  System.out.println("sum = " + sum);
	  
	}
	
 }
	


