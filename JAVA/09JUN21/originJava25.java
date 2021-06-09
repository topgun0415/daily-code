
public class originJava25 {

	public static void main(String[] args) {
		
		Loop : for (int i = 2; i <=9; i++) {
			 		 for (int j = 1; i <=9; j++) {
			 		   
			 		   if (j>=5) 
			 		  
//			 	   break;
			 		   break Loop;  // Loop 괄호가 끝나는 곳으로 감 
			 		System.out.println(i + "*" + j + "=" + (i*j));
			 			 
			 			 
			  }
			  System.out.println();
			 		 
		}  // Loop 괄호 
		

	}

}
