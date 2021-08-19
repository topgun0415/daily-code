
public class Egoing2 {
	public static void main(String[] args) {
		
		// Making Auth App
		
		System.out.println(args[0]);
		
		String id = "Egoing";
		String inputID = args[0];
		
		String pass = "1111";
		String inputpass = args[1];
		
		System.out.println("Hello.");
	
//		if (inputID.equals(id)) {
//			   if (inputpass.equals(pass)) {
//				   System.out.println("Master");   
//				   }
//		        }	else  {
//			       System.out.println("Boss"); 
//			    }
		
		
		// 위에 있는 두개의 if 조건문을 && 연산자로 묶음으로서 코딩 수 효과적으로 줄일 수 있다. 
		// use && to make code more shorter and efficient  than the before 
		
		       if (inputID.equals(id) && inputpass.equals(pass)) {
		    	   System.out.println("Master"); 
		    	   
		       } else  {
			       System.out.println("Boss"); 
			    }
		
		    
		    
 
	}
}

		    
		    